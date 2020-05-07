import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmsSenderLandingComponent } from './sms-sender-landing/sms-sender-landing.component';


const routes: Routes = [

  { path: 'sms-landing', component: SmsSenderLandingComponent },
  { path: '',   redirectTo: '/sms-landing', pathMatch: 'full' }, // sms-landing-}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
