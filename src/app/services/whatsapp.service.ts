import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Client } from '../class/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  APIEndpoint = environment.apiEndpoint + "whatsapp";
  constructor(private http: HttpClient) { }


  postCliente(cliente:Client) : Observable<any> {

    return this.http.post<Client>(this.APIEndpoint,cliente);

  }
}
