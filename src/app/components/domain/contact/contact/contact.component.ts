import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

import { ContactService } from 'src/app/service/contact/contact.service';
import { Subscription } from 'rxjs';

import { Contactvalue } from 'src/app/models/contact/contactvalue.model';

import { GetallvaluesService } from 'src/app/service/home/getallvalues.service'; // sửa thành getallvalues

import { ValueInHome } from 'src/app/models/home/valueinhome.model'; // sửa thành valueinhome

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  public _Subscription: Subscription;
  public _Contactvalue: Contactvalue[] = [];
  public _ContactChildvalue: Contactvalue[] = [];
  
  constructor(
          private _ContactService: ContactService,
          private _GetallvaluesService: GetallvaluesService,
          private wowService: NgwWowService
      ) {}

  ngOnInit() {
      this.wowService.init();
      this.onGetValue();
      this.onGetValueHome();

  }

  ngOnDestroy(): void {
      if (this._Subscription) {
        this._Subscription.unsubscribe();
      }
  
  }

  onGetValue() {
      this._Subscription = this._ContactService.getAllValuses().subscribe((data: Contactvalue[]) => {
        this._Contactvalue = data;
        console.log(this._Contactvalue[1]);
        this._ContactChildvalue = this._ContactChildvalue.concat(this._Contactvalue[0]);
        console.log(this._ContactChildvalue);
      })
    }

    public _ValueInHome: ValueInHome[] = [];
    public _ValueInHomeValue: any = [];
  

    onGetValueHome() {
        this._Subscription = this._GetallvaluesService.getAllValuses().subscribe((data: ValueInHome[]) => {
            this._ValueInHome = data;
            console.log(this._ValueInHome);
        })
      }
}
