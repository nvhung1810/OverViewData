import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-accountant-create',
  templateUrl: './accountant-create.component.html',
  styleUrls: ['./accountant-create.component.css']
})
export class AccountantCreateComponent implements OnInit {

  constructor() { }
  category: string;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  val: any;
  ngOnInit(): void {
  }

  handleClick(e: any) {
    //execute action
}
}


