import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [`
    :host ::ng-deep .p-password input {
        width: 15rem
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value1: string;

  value2: string;

  value3: string;

  value4: string;

  disabled: boolean = true;

  value5: string = 'Disabled';

  

}
