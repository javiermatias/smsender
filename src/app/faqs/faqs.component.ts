import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {


  constructor() { }

  pregunta1= false;
  ngOnInit() {
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
