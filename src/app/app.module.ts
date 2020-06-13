import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmsSenderLandingComponent } from './sms-sender-landing/sms-sender-landing.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { DownloadSmsComponent } from './download-sms/download-sms.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { WhatsappLandingComponent } from './whatsapp-landing/whatsapp-landing.component';
import { DownloadWhatsappComponent } from './download-whatsapp/download-whatsapp.component';
@NgModule({
  declarations: [
    AppComponent,
    SmsSenderLandingComponent,
    HeaderComponent,
    ModalComponent,
    DownloadSmsComponent,
    WhatsappLandingComponent,
    DownloadWhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
