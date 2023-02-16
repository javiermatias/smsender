import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telegram-landing',
  templateUrl: './telegram-landing.component.html',
  styleUrls: ['./telegram-landing.component.css']
})
export class TelegramLandingComponent implements OnInit {

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
    for (let _i = 0; _i < this.slides.length; _i++) {
      
      

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

   
    this.descarga=true;
  }
  

  irDescarga(){
    this.router.navigate(['downloadTelegram']);
  }


  onClose(object) {

    //console.log(object.ok);
/*    if(object.ok ){

    this.descarga=false;
    //this.router.navigate(['download']);
    this.router.navigate(['downloadSMS/', object.user]);
   }else{
    this.descarga=false;
   } */

  }


  contacto(el: HTMLElement){
    //console.log(el);
    
        el.scrollIntoView({behavior: 'smooth'});
        //console.log("se hizo click en contacto");
      }

}
