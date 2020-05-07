import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms-sender-landing',
  templateUrl: './sms-sender-landing.component.html',
  styleUrls: ['./sms-sender-landing.component.css']
})
export class SmsSenderLandingComponent implements OnInit {

  slides:string[] =["1","2","3"] ;
  slideActual ="1";
  constructor() { }

  ngOnInit() {
  }

  pasarSlide(){

    console.log("paso slide");
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
}
