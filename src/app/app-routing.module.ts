import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsSenderLandingComponent } from './sms-sender-landing/sms-sender-landing.component';
import { DownloadSmsComponent } from './download-sms/download-sms.component';
import { WhatsappLandingComponent } from './whatsapp-landing/whatsapp-landing.component';
import { DownloadWhatsappComponent } from './download-whatsapp/download-whatsapp.component';
import { FaqsComponent } from './faqs/faqs.component';


const routes: Routes = [

  { path: 'sms-landing', component: SmsSenderLandingComponent },
 /*  { path: 'faqs', component: FaqsComponent }, */
  { path: 'whatsapp-landing', component: WhatsappLandingComponent },
  { path: 'downloadSMS/:user', component: DownloadSmsComponent },
  { path: 'downloadWhats/:user', component: DownloadWhatsappComponent },
  { path: '',   redirectTo: '/sms-landing', pathMatch: 'full' }, // sms-landing-}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
