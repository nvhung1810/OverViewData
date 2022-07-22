import { Component, OnInit } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  public CalendarModule: CalendarModule;

  date1: Date;

  dates: Date[];

  rangeDates: Date[];

  minDate: Date;

  maxDate: Date;

  invalidDates: Array<Date>

  ngOnInit() {
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
  }

  value1: string;

  value2: string;

  value3: string;

  value4: string;

  disabled: boolean = true;

  value5: string = 'Disabled';

}
