import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
import { GetallvaluesService } from 'src/app/service/home/getallvalues.service'; // sửa thành getallvalues
import { ValueInHome } from 'src/app/models/home/valueinhome.model'; // sửa thành valueinhome
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public _Subscription: Subscription;

  constructor(
          private _GetallvaluesService: GetallvaluesService,
          private wowService: NgwWowService
      ) {}

  ngOnInit() {
      this.wowService.init();
      this.onGetValueHome();

  }

  ngOnDestroy(): void {
      if (this._Subscription) {
        this._Subscription.unsubscribe();
      }
  
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
