import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';


import * as _moment from 'moment';
import {Moment} from 'moment';
const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-year-month',
  templateUrl: './date-year-month.component.html',
  styleUrls: ['./date-year-month.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DateYearMonthComponent implements OnInit {

  @Output() updateDate: EventEmitter<Date> = new EventEmitter<Date>();
  checkDate: string;
  date = new FormControl(moment());
  constructor() { }

  ngOnInit() {
  }


  // clickon() {
  //   console.log(this.val);
  // }


  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(normlizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.month(normlizedMonth.month());
    // console.log(ctrlValue);
    this.date.setValue(ctrlValue);
    // console.log(normlizedMonth.month());
    if (this.checkDate !== this.date.value._d.toString()) {
      this.checkDate = this.date.value._d.toString();
      this.updateDate.emit(this.date.value);
    }
    datepicker.close();
  }

}
