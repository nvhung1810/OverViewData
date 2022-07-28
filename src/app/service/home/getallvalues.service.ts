import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueInHome } from './../../models/home/valueinhome.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetallvaluesService {

  public url: string = 'https://62ce4de3066bd2b699326ce4.mockapi.io/home';

  constructor(
    public http: HttpClient
  ) { }

  getAllValuses(): Observable<ValueInHome[]>  {
    return this.http.get<ValueInHome[]>(this.url);
  }

  getProduct(id: number): Observable<ValueInHome> {
    const UrlAPI = `${this.url}/${id}`;
    return this.http.get<ValueInHome>(UrlAPI);
  }

}
