import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download-sms',
  templateUrl: './download-sms.component.html',
  styleUrls: ['./download-sms.component.css']
})
export class DownloadSmsComponent implements OnInit {
  

  user:string;
  constructor(private sanitizer:DomSanitizer,private route: ActivatedRoute) {
   // this.backgroundImg = sanitizer.bypassSecurityTrustStyle('url(assets/download.jpg)');
   }

  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get("user");

  }

}
