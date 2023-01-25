import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download-whatsapp',
  templateUrl: './download-whatsapp.component.html',
  styleUrls: ['./download-whatsapp.component.css']
})
export class DownloadWhatsappComponent implements OnInit {

  user:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.user=this.route.snapshot.paramMap.get("user");
  }

}
