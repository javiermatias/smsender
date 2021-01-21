import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  @Output() clickcontact = new EventEmitter();
  scroll:boolean=false;

  class:string="w3-bar"

  class2:string="w3-bar w3-card w3-animate-top w3-white"
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrolling, true)
  }
  

  contact(){

    //console.log("se hizo click en contacto");

    this.clickcontact.emit();
  }
  scrolling=(s)=>{
    let sc = s.target.scrollingElement.scrollTop;
    //console.log(sc);
    if(sc >=60){
      this.scroll=true
      //console.log("Se activo Scroll");
    }
    else{
      
      this.scroll=false
    
    
    }
  }


  acerca(){
    alert("Click en toogle");
  }
}
