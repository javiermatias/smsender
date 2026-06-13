/**
 * Static prerenderer for the SMS Sender SPA.
 *
 * After `ng build`, this script serves the `dist/` folder, opens each route in a
 * headless browser, waits for Angular to finish rendering, and writes the fully
 * rendered HTML back to disk as `dist/<route>/index.html`. Search engines and AI
 * crawlers then receive complete page content instead of an empty <app-root>.
 *
 * Usage:  node prerender.js
 * (runs automatically via `npm run build:seo`)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 4321;

// Routes to prerender (must match app-routing.module.ts).
const ROUTES = [
  '/sms-landing',
  '/whatsapp-landing',
  '/telegram-landing',
  '/faqs',
  '/privacy',
  '/downloadSMS',
  '/downloadWhats',
  '/downloadTelegram',
];

const MIME = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

// Minimal static file server with SPA fallback to index.html.
function startServer() {
  const indexHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'));
  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(DIST_DIR, urlPath);

    if (urlPath !== '/' && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA fallback: let Angular's router handle the path.
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(indexHtml);
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function run() {
  if (!fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    console.error('✗ dist/index.html not found. Run `ng build` first.');
    process.exit(1);
  }

  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 60000,
      });

      // Wait until Angular has rendered content inside <app-root>.
      await page
        .waitForFunction(
          () => {
            const root = document.querySelector('app-root');
            return root && root.innerText.trim().length > 0;
          },
          { timeout: 20000 }
        )
        .catch(() => console.warn(`  ⚠ ${route}: app-root stayed empty, saving anyway`));

      const html = await page.content();

      const outDir = path.join(DIST_DIR, route);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      console.log(`  ✓ prerendered ${route}  ->  dist${route}/index.html`);

      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log('✓ Prerender complete.');
}

run().catch((err) => {
  console.error('✗ Prerender failed:', err);
  process.exit(1);
});
