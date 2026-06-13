import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-whatsapp-landing',
  templateUrl: './whatsapp-landing.component.html',
  styleUrls: ['./whatsapp-landing.component.css']
})
export class WhatsappLandingComponent implements OnInit {

  slides:string[] =["1","2","3"] ;
  slideActual ="1";

  descarga= false;

  interval;
  constructor(private router: Router, private seo: SeoService) { }

  ngOnInit() {
    this.seo.update({
      title: 'Enviar WhatsApp masivos automáticos desde tu PC | SMS Sender SmartSoft',
      description: 'Envía mensajes de WhatsApp masivos automáticos desde tu PC con SMS Sender de SmartSoft. Rápido, sencillo y usando tu propio teléfono. Gratis para probar.',
      path: '/whatsapp-landing',
      image: 'https://sms-sender.smartsoftia.com/assets/whatsapp1.jpg'
    });
  }


  startTimer() {
    this.interval = setInterval(() => {
      this.pasarSlide();
    },5000)
  }


  pasarSlide(){

    // console.log("paso slide");
     for (var _i = 0; _i < this.slides.length; _i++) {
       
       
 
       if(this.slideActual === this.slides[_i]){
       
         if(_i == this.slides.length-1){
           this.slideActual = this.slides[0];
         }else{
           this.slideActual = this.slides[_i+1];
         }
       
         return;
       }
      
     
     }
   }


   alert() {
    window.alert('test');
  }

  irDescarga(){
    this.router.navigate(['downloadWhats']);
  }


  mostrarDescarga(){

    //console.log("modal se activo");
    this.descarga=true;
  }

  onClose(object) {

    if(object.ok ){
 
     this.descarga=false;
     //this.router.navigate(['download']);
     this.router.navigate(['downloadWhats/', object.user]);
    }else{
     this.descarga=false;
    }
 
   }

   contacto(el: HTMLElement){
    console.log(el);
    
        el.scrollIntoView({behavior: 'smooth'});
        console.log("se hizo click en contacto");
      }
}
