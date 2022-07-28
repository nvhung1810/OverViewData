import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

import { GetallvaluesService } from 'src/app/service/home/getallvalues.service'; // sửa thành getallvalues
import { Subscription } from 'rxjs';

import { ValueInHome } from 'src/app/models/home/valueinhome.model'; // sửa thành valueinhome

@Component({
  selector: 'app-home-introduce',
  templateUrl: './home-introduce.component.html',
  styleUrls: ['./home-introduce.component.css']
})
export class HomeIntroduceComponent implements OnInit {
    public value: any;

    public _Subscription: Subscription;

    public _ValueInHome: ValueInHome[] = [];
    public _part1: ValueInHome[] = [];

    public _ValueInHomeValue: any = [];
  
    public imglink: string;
    
    images: any[];

    constructor(
            private _GetallvaluesService: GetallvaluesService,
            private wowService: NgwWowService
        ) {}

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    ngOnInit() {
        this.wowService.init();
        this.onGetValue();
    }

    ngOnDestroy(): void {
        if (this._Subscription) {
          this._Subscription.unsubscribe();
        }
    
    }

    onGetValue() {
        this._Subscription = this._GetallvaluesService.getAllValuses().subscribe((data: ValueInHome[]) => {
            this._ValueInHome = data;
            console.log(this._ValueInHome);
            for(let i = 0; i < this._ValueInHome.length; i++) {
                for(let j = 0; j < this._ValueInHome[i].data.length; j++) {
                    this.imglink = this._ValueInHome[i].data[j].imglink;
                }
                console.log(this.imglink)
            }
        })
      }
}
