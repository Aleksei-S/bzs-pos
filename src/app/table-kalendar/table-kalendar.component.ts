import { Component, OnInit } from '@angular/core';
import { ROW, PercentRow, TotalRow, OtherRow, CELL } from './object/row';
import { Subscription } from 'rxjs';
import { BasicInfoService } from '../service/basic-info.service';

import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-table-kalendar',
  templateUrl: './table-kalendar.component.html',
  styleUrls: ['./table-kalendar.component.css']
})
export class TableKalendarComponent implements OnInit {

  private subsDate$: Subscription;
  private lastingBuilding$: Subscription;
  dateStartBuilding: Moment;
  lastingBuilding: number;
  table: ROW[] = [];
  arrMonth: string[] = [];



  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
    this.subsDate$ = this.infoService.date$
      .subscribe((moments) => {
        console.log('date');
        console.log(moments);
        this.dateStartBuilding = moments;
        this.changeTable();
      });

      this.lastingBuilding$ = this.infoService.lastingBuilding$
      .subscribe((num) => {
        console.log('num');
        console.log(num);
        this.lastingBuilding = num;
        this.changeTable();
        // this.
      });


    this.table.push(new ROW('Жилой дом'));
    this.table.push(new OtherRow());
    this.table.push(new TotalRow());
    this.table.push(new PercentRow([]));
    // console.log(this.table);

  }

  changeTable() {
    const arrMonth = [];
    let timeArr = moment(this.dateStartBuilding.startOf('month'));
    for (let index = 0; index < +this.lastingBuilding; index++) {
      arrMonth.push(timeArr.format('MMMM') + timeArr.format('YYYY'));
      timeArr = moment(timeArr).add(1, 'M');
    }
    console.log(arrMonth);
    this.table.forEach((row) => {
      row.createMonth(arrMonth);
    });
    this.arrMonth = arrMonth;
    //  this.service.addMonth(arrMonth);
    //  this.service.addPercent(arrMonth);
    // // console.log(arrMonth);
  }


  addRow() {
    const r = new ROW('NEEWWWWWWW');
    r.createMonth(this.arrMonth);
    this.table.push(r);
  }



  calculateOtherRow(value) {
    let other:  OtherRow;
    let total:  TotalRow;
    let result = 0;
    this.table.forEach((e) => {
      if (e instanceof OtherRow) {
        other = e;
      } else if (e instanceof TotalRow) {
        total = e;
      } else if (e instanceof PercentRow) {
      } else {
        result = result + e[value];
      }
    });
    other[value] = total[value] - result;
  }

  calculateCellRow( row, month, event ) {
    // row[month] = event;
    // let other:  OtherRow;
    // let total:  TotalRow;
    // let result = 0;
    console.log(row);
    console.log(month);
    console.log(event);
    // this.table.forEach((e) => {
    //   if (e instanceof OtherRow) {
    //     other = e;
    //   } else if (e instanceof TotalRow) {
    //     total = e;
    //   } else if (e instanceof PercentRow) {
    //   } else {
    //     result = result + e[value];
    //   }
    // });
  }


  clickOn() {
    // this.table.createMonth(['ffff111', 'ffff222', 'ffff333']);
    console.log(this.table);
    this.table.forEach((e) => {
      console.log(e instanceof PercentRow);
    });

  }

  // clickOn2() {
  //   this.table.createMonth(['ZZZZZZZZ']);
  //   console.log(this.table);
  // }

  // clickOn3() {
  //   // this.table.createMonth('ZZZZZZZZ');
  //   console.log(this.table.calculateTotal());
  // }


}
