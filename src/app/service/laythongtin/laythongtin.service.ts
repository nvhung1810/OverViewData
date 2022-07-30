import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accountant } from '../../models/accountant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaythongtinService {

  public url: string = 'https://62ce4de3066bd2b699326ce4.mockapi.io/accountant';

  constructor(
    public http: HttpClient
  ) { }

  getAllValuses(): Observable<Accountant[]>  {
    return this.http.get<Accountant[]>(this.url);
  }

  getProduct(id: number): Observable<Accountant> {
    const UrlAPI = `${this.url}/${id}`;
    return this.http.get<Accountant>(UrlAPI);
  }

  addvalue(product: Accountant): Observable<Accountant> {
    return this.http.post<Accountant>(this.url, product);
  }

}
