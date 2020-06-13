import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sms-sender-landing',
  templateUrl: './sms-sender-landing.component.html',
  styleUrls: ['./sms-sender-landing.component.css']
})
export class SmsSenderLandingComponent implements OnInit {

  slides:string[] =["1","2","3"] ;
  slideActual ="1";

  descarga= false;

  interval;
  constructor(private router: Router) { }

  ngOnInit() {
    //this.startTimer();
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

  mostrarDescarga(){

    //console.log("modal se activo");
    this.descarga=true;
  }
  
  onClose(object) {

   if(object.ok ){

    this.descarga=false;
    //this.router.navigate(['download']);
    this.router.navigate(['downloadSMS/', object.user]);
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
