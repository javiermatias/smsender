import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../class/client';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();

  cliente = new Client('', '', '');

  submitted = false;

  onSubmit() { 
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.cliente))
    this.submitted = true; }
  //close = false;
  constructor() { }

  ngOnInit() {
  }

  closes(_close: boolean) {
    this.closed.emit(_close);
    //this.didVote = true;
  }

}
