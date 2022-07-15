import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAcc'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],
            date: string, number: string,
            explain: string, debt: string,
            have: string, money: string,
            exchange_rate: string): any 
  {
    if(!date && !number && !explain && !have && !debt && !money && !exchange_rate) return value;
    else {
      if(date) {
        value = value.filter(x => {
          return x.date.toLowerCase().indexOf(date.toLowerCase()) !== -1;
        })
      }
      else if(number) {
        value = value.filter(x => {
          return x.number.toLowerCase().indexOf(number.toLowerCase()) !== -1;
        })
      }
      else if(explain) {
        value = value.filter(x => {
          return x.explain.toLowerCase().indexOf(explain.toLowerCase()) !== -1;
        })
      }
      else if(have) {
        value = value.filter(x => {
          return x.have.toString().indexOf(have) !== -1;
        })
      }
      else if(debt) {
        value = value.filter(x => {
          return x.debt.toString().indexOf(debt) !== -1;
        })
      }
      else if(money) {
        value = value.filter(x => {
          return x.money.toString().indexOf(money) !== -1;
        })
      }
      else if(exchange_rate) {
        value = value.filter(x => {
          return x.exchange_rate.toString().indexOf(exchange_rate) !== -1;
        })
      }
     
    }
    return value;
  }

}
