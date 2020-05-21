import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsSenderLandingComponent } from './sms-sender-landing/sms-sender-landing.component';
import { DownloadSmsComponent } from './download-sms/download-sms.component';


const routes: Routes = [

  { path: 'sms-landing', component: SmsSenderLandingComponent },
  { path: 'download/:user', component: DownloadSmsComponent },
  { path: '',   redirectTo: '/sms-landing', pathMatch: 'full' }, // sms-landing-}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
