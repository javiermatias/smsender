import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.update({
      title: 'Política de privacidad | SMS Sender SmartSoft',
      description: 'Política de privacidad de SMS Sender de SmartSoft: cómo tratamos y protegemos tus datos al usar nuestra aplicación de envío de mensajes.',
      path: '/privacy'
    });
  }

}
