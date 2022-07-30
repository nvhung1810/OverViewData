import { Component, OnInit, OnDestroy } from '@angular/core';
import { LaythongtinService } from 'src/app/service/laythongtin/laythongtin.service';
import { Subscription } from 'rxjs';
import { Accountant } from 'src/app/models/accountant.model';
import { FormControl } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PrimeNGConfig } from 'primeng/api';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-accountant-list',
  templateUrl: './accountant-list.component.html',
  styleUrls: ['./accountant-list.component.css']
})
export class AccountantListComponent implements OnInit, OnDestroy {

  public _Subscription: Subscription;
  public _Accountant: Accountant[] = [];
  public _AccountantValue: Accountant[] = [];
  public _total: number = 0;
  public _total1: number = 0;
  public _totalArray: number[] = [];
  public _totalArray1: number[] = [];

  public _money: number = 0;

  //  get value để tìm
  public dateFilter: string;
  public numberFilter: string;
  public explainFilter: string
  public debtFilter: string;
  public haveFilter: string;
  public moneyFilter: string;
  public exchange_rateFilter: string;
  // 
  name = new FormControl('');

  constructor(
    public _LaythongtinService: LaythongtinService,
    private primengConfig: PrimeNGConfig
  ) { }

  items: MenuItem[];

  ngOnInit(): void {
    this.onGetValue();
    this.primengConfig.ripple = true;
    this.items = [
        {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          items:[
              {
                  label:'Left',
                  icon:'pi pi-fw pi-align-left'
              },
              {
                  label:'Right',
                  icon:'pi pi-fw pi-align-right'
              },
              {
                  label:'Center',
                  icon:'pi pi-fw pi-align-center'
              },
              {
                  label:'Justify',
                  icon:'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label:'Bộ Lọc',
          icon:'pi pi-fw pi-filter'
      },
      {
          label:'Events',
          icon:'pi pi-fw pi-calendar',
          items:[
              
                  {
                      label:'Save',
                      icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-calendar-minus'
                  }
                ]
      }
  ];
  }

  onGetValue() {
    this._Subscription = this._LaythongtinService.getAllValuses().subscribe((data: Accountant[]) => {
      this._Accountant = data;
      console.log(this._Accountant);
    })
  }

  ngOnDestroy(): void {
    if (this._Subscription) {
      this._Subscription.unsubscribe();
    }

  }



}