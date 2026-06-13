import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  /** Canonical path starting with '/', e.g. '/whatsapp-landing' */
  path: string;
  image?: string;
}

/**
 * Centralises per-route SEO tags (title, description, canonical, Open Graph,
 * Twitter). Call `update(...)` from each routed component's ngOnInit so every
 * page exposes unique metadata instead of sharing index.html's defaults.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://sms-sender.smartsoftia.com';
  private readonly defaultImage = 'https://sms-sender.smartsoftia.com/assets/sms1.jpg';

  constructor(private titleService: Title, private meta: Meta) {}

  update(data: SeoData): void {
    const url = this.baseUrl + data.path;
    const image = data.image || this.defaultImage;

    this.titleService.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    this.setCanonical(url);

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    // Twitter
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  private setCanonical(url: string): void {
    let link: HTMLLinkElement = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
