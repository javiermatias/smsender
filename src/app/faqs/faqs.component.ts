import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {


  constructor(private seo: SeoService) { }

  pregunta1= false;
  ngOnInit() {
    this.seo.update({
      title: 'Preguntas frecuentes (FAQ) | SMS Sender SmartSoft',
      description: 'Resuelve tus dudas sobre SMS Sender de SmartSoft: cómo enviar SMS, WhatsApp y Telegram masivos desde tu PC, instalación, costos y soporte.',
      path: '/faqs'
    });
  }

 

  acerca(){
    alert("Click en toogle");
  }

  m_pregunta1(){
    // Boolean expression? First statement : second statement
    this.pregunta1 ? this.pregunta1=false : this.pregunta1=true
 /*    if(this.pregunta1){
        this.pregunta1=false;
    }else{
      this.pregunta1=true;
    } */


  }
}
