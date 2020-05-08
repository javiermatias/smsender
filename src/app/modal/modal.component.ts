import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() closed = new EventEmitter<boolean>();

  //close = false;
  constructor() { }

  ngOnInit() {
  }

  closes(_close: boolean) {
    this.closed.emit(_close);
    //this.didVote = true;
  }

}
