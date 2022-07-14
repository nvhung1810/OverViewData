import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accountant } from './../models/accountant.model';
import { Observable } from 'rxjs';
import { fullTimeandTotalMoney } from '../models/fulltimeandtotalmoney.model';

@Injectable({
  providedIn: 'root'
})
export class LaythongtinService {

  public url: string = 'https://62ce4de3066bd2b699326ce4.mockapi.io/accountant';
  public urlfullTime: string = 'https://62ce4de3066bd2b699326ce4.mockapi.io/timeandtotalmoney';

  constructor(
    public http: HttpClient
  ) { }

  getAllValuses(): Observable<Accountant[]>  {
    return this.http.get<Accountant[]>(this.url);
  }

  getAllTimeandTotal(): Observable<fullTimeandTotalMoney[]>  {
    return this.http.get<fullTimeandTotalMoney[]>(this.urlfullTime);
  }

  
}
