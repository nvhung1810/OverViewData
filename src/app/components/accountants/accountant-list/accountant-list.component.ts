import { Component, OnInit, OnDestroy } from '@angular/core';
import { LaythongtinService } from 'src/app/service/laythongtin.service';
import { Subscription } from 'rxjs';
import { Accountant } from 'src/app/models/accountant.model';
import { fullTimeandTotalMoney } from 'src/app/models/fulltimeandtotalmoney.model';
import { FormControl } from '@angular/forms';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-accountant-list',
  templateUrl: './accountant-list.component.html',
  styleUrls: ['./accountant-list.component.css']
})
export class AccountantListComponent implements OnInit, OnDestroy {

  public _Subscription: Subscription;
  public _Accountant: Accountant[] = [];
  public _AccountantValue: Accountant[] = [];
  public _fullTimeandTotalMoney: fullTimeandTotalMoney[] = [];
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

  ngOnInit(): void {
    this.onGetValue();
    this.primengConfig.ripple = true;
  }

  onGetValue() {
    this._Subscription = this._LaythongtinService.getAllValuses().subscribe((data: Accountant[]) => {
      this._Accountant = data;
      for(let i = 0; i < this._Accountant.length; i++) {
        for(let j = 0; j < this._Accountant[i].data.length; j++) {
          this._money += this._Accountant[i].data[j].money;
        }
        this._totalArray.push(this._money);
      }

      for(let item = 1; item < this._totalArray.length; ++item) {
        if(item == 1) {
          this._totalArray1.push(this._totalArray[0]);
        }
        this._total = this._totalArray[item] - this._totalArray[item-1];
        console.log(this._total);
        this._totalArray1.push(this._total);
      }
      console.log(this._totalArray1);
      // console.log(this._Accountant);
      // Array.prototype.splice.apply(this._Accountant, [0, this._totalArray1.length].concat(_totalArray1));
    })
  }

  ngOnDestroy(): void {
    if (this._Subscription) {
      this._Subscription.unsubscribe();
    }

  }

}