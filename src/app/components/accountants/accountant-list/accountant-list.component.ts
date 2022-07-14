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
  public _AccountantValue: Accountant[] = [];
  public _fullTimeandTotalMoney: fullTimeandTotalMoney[] = [];

  constructor(
    public _LaythongtinService: LaythongtinService,
  ) { }

  ngOnInit(): void {
    this.onGetValue();
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
