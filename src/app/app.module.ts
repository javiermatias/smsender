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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FaqsComponent } from './faqs/faqs.component';
import { TelegramLandingComponent } from './telegram-landing/telegram-landing.component';
import { DownloadTelegramComponent } from './download-telegram/download-telegram.component';

@NgModule({
  declarations: [
    AppComponent,
    SmsSenderLandingComponent,
    HeaderComponent,
    ModalComponent,
    DownloadSmsComponent,
    WhatsappLandingComponent,
    DownloadWhatsappComponent,
    FaqsComponent,
    TelegramLandingComponent,
    DownloadTelegramComponent
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
