import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contactvalue } from './../../models/contact/contactvalue.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public url: string = 'https://62ce4de3066bd2b699326ce4.mockapi.io/infomation';

  constructor(
    public http: HttpClient
  ) { }

  getAllValuses(): Observable<Contactvalue[]>  {
    return this.http.get<Contactvalue[]>(this.url);
  }
}
