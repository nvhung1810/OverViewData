import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

import { ContactService } from 'src/app/service/contact/contact.service';
import { Subscription } from 'rxjs';

import { Contactvalue } from 'src/app/models/contact/contactvalue.model';
import { Accountant } from 'src/app/models/accountant.model';
import { LaythongtinService } from 'src/app/service/laythongtin/laythongtin.service';

import { GetallvaluesService } from 'src/app/service/home/getallvalues.service'; // sửa thành getallvalues


@Component({
  selector: 'app-accountant-create',
  templateUrl: './accountant-create.component.html',
  styleUrls: ['./accountant-create.component.css']
})
export class AccountantCreateComponent implements OnInit {

  category: string;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  val: any;

  public _Subscription: Subscription;
  public _Contactvalue: Contactvalue[] = [];
  public _ContactChildvalue: Contactvalue[] = [];
  public _Accountant: Accountant;
  public value: string;

  date2: Date;
  dates: Date[];
  rangeDates: Date[];
  minDate: Date;
  maxDate: Date;
  invalidDates: Array<Date>

  constructor(
          private _ContactService: ContactService,
          private _GetallvaluesService: GetallvaluesService,
          private wowService: NgwWowService,
          public _LaythongtinService: LaythongtinService
      ) {}

  ngOnInit() {
      this.wowService.init();
      this.onGetValue();
      let today = new Date();
      let month = today.getMonth();
      let year = today.getFullYear();
      let prevMonth = (month === 0) ? 11 : month -1;
      let prevYear = (prevMonth === 11) ? year - 1 : year;
      let nextMonth = (month === 11) ? 0 : month + 1;
      let nextYear = (nextMonth === 0) ? year + 1 : year;
      this.minDate = new Date();
      this.minDate.setMonth(prevMonth);
      this.minDate.setFullYear(prevYear);
      this.maxDate = new Date();
      this.maxDate.setMonth(nextMonth);
      this.maxDate.setFullYear(nextYear);

      let invalidDate = new Date();
      invalidDate.setDate(today.getDate() - 1);
      this.invalidDates = [today,invalidDate];
      // 
      this._Accountant = new Accountant();
  }

  ngOnDestroy(): void {
      if (this._Subscription) {
        this._Subscription.unsubscribe();
      }
  
  }

  onGetValue() {
      this._Subscription = this._ContactService.getAllValuses().subscribe((data: Contactvalue[]) => {
          this._Contactvalue = data;
          // console.log(this._Contactvalue[1]);
          this._ContactChildvalue = this._ContactChildvalue.concat(this._Contactvalue[1]);
          // console.log(this._ContactChildvalue);
      })
    }

    onAddValue() {
      this._Subscription = this._LaythongtinService.addvalue(this._Accountant).subscribe(data => {
        console.log(data);
      })
    }
}


