import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from 'src/app/components/domain/image/image';


@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {
  public imgurl: string = 'https://62ce4de3066bd2b699326ce4.mockapi.io/timeandtotalmoney';

  constructor(private http: HttpClient) { }

  getImages() {
  return this.http.get<any>(this.imgurl)
    .toPromise()
    .then(res => <Image[]>res.data)
    .then(data => { return data; });
  }
}
