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
      console.log(this._Accountant);
    })
  }

  ngOnDestroy(): void {
    if (this._Subscription) {
      this._Subscription.unsubscribe();
    }
  }
}
