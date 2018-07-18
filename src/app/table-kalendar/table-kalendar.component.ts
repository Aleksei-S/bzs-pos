import { Component, OnInit } from '@angular/core';
import { ROW, CELL } from './object/row';
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
      });


    this.table.push(new ROW('FFFFFFFFFFF'));
    this.table.push(new ROW('FFFFFFFFFFF222222'));
    this.table.push(new ROW('FFFFFFFFFFF3333'));
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
    //  this.service.addMonth(arrMonth);
    //  this.service.addPercent(arrMonth);
    // // console.log(arrMonth);
  }











  clickOn() {
    // this.table.createMonth(['ffff111', 'ffff222', 'ffff333']);
    console.log(this.table);
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
