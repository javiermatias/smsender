import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from '../class/client';
import { SmsService } from '../services/sms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closed = new EventEmitter<{ok:boolean, user: string}>();

  cliente = new Client('', '', '');

  submitted = false;


  //close = false;
  constructor(private _smsService:SmsService,private router: Router) { 

  }

  onSubmit() { 


    this._smsService.postCliente(this.cliente)
    .subscribe(
  data => this.closes(true,data.user),
  err => this.closes(false,err)
);

} 
   


  ngOnInit() {
  }

  

  closes(_ok:boolean,_user:string) {

    this.closed.emit({ok:_ok, user:_user});
    //this.didVote = true;
  }

}
