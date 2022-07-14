import { Component, OnInit, OnDestroy } from '@angular/core';
import { LaythongtinService } from 'src/app/service/laythongtin.service';
import { Subscription } from 'rxjs';
import { Accountant } from 'src/app/models/accountant.model';
import { fullTimeandTotalMoney } from 'src/app/models/fulltimeandtotalmoney.model';

@Component({
  selector: 'app-accountant-list',
  templateUrl: './accountant-list.component.html',
  styleUrls: ['./accountant-list.component.css']
})
export class AccountantListComponent implements OnInit, OnDestroy {

  public _Subscription: Subscription;
  public _Accountant: Accountant[] = [];
  public _fullTimeandTotalMoney: fullTimeandTotalMoney[] = [];

  constructor(
    public _LaythongtinService: LaythongtinService,
  ) { }

  ngOnInit(): void {
    this.onGetValue();
    // this.onGetDate();
  }

  onGetValue() {
    this._Subscription = this._LaythongtinService.getAllValuses().subscribe((data: Accountant[]) => {
      this._Accountant = data;
      console.log(this._Accountant);
    })
  }

    // onGetDate() {
    //   this._Subscription = this._LaythongtinService.getAllTimeandTotal().subscribe((data: fullTimeandTotalMoney[]) => {
    //     this._fullTimeandTotalMoney = data;
    //     console.log(this._fullTimeandTotalMoney);
    //   })
    // }


  onHadel() {
    for(var i = 0; i < this._Accountant.length; i++) {
      console.log(i);
    }
  }

  ngOnDestroy(): void {
    if (this._Subscription) {
      this._Subscription.unsubscribe();
    }
  }
}
