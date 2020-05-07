import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {


  title = 'sms-sender';

  progress = 'Cargando...';

  cargando = true;
  ngOnInit(): void {
    this.cargando = true;
    console.log("se cargo app");
  }
 

  

  onActivated($event) {
    //console.log($event);
    this.setDelay(5);
    this.cargando = false; 
  }

   setDelay(i) {
    setTimeout(function(){
      console.log(i);
    }, 1000);
  }
  




}
