import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  dateRange: {
    from: Date;
    to: Date
  } = {
    from:  new Date(Date.now() + 24 * 60 * 60 * 1000 *2),
    to: new Date(Date.now() + 24 * 60 * 60 * 1000 * 90)
  };

  option: CalendarModalOptions = {
    pickMode: 'range',
    title: 'RANGE',
    defaultDateRange: this.dateRange
  };


onChange($event) {
    console.log($event)
  }
}
