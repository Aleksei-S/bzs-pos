import { Component, OnInit } from '@angular/core';
import { ROW, PercentRow, TotalRow, OtherRow, MainRow, CELL } from './object/row';
import { Subscription } from 'rxjs';
import { BasicInfoService } from '../service/basic-info.service';
import { TableKalendarService } from './table-kalendar.service';

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
  percentRow: PercentRow;


  constructor(private infoService: BasicInfoService,
              private tableService: TableKalendarService,) { }

  ngOnInit() {
    this.subsDate$ = this.infoService.date$
      .subscribe((moments) => {
        this.dateStartBuilding = moments;
        this.changeTable();
      });

      this.lastingBuilding$ = this.infoService.lastingBuilding$
      .subscribe((num) => {
        this.lastingBuilding = num;
        this.changeTable();
      });

    this.table.push(new MainRow());
    this.table.push(new OtherRow());
    this.table.push(new TotalRow());
  }

  changeTable() {
    const arrMonth = [];
    let timeArr = moment(this.dateStartBuilding.startOf('month'));
    for (let index = 0; index < +this.lastingBuilding; index++) {
      arrMonth.push(timeArr.format('MMMM') + timeArr.format('YYYY'));
      timeArr = moment(timeArr).add(1, 'M');
    }
    this.table.forEach((row) => {
      row.createMonth(arrMonth);
    });
    this.arrMonth = arrMonth;
    this.tableService.getPercentRow(arrMonth.length);
    
  }

  addRow() {
    const r = new ROW('NEEWWWWWWW');
    r.createMonth(this.arrMonth);
    this.table.push(r);
  }

  calculate() {
    this.table.forEach((row) => {
      if (row.calculate === true) {
        this.arrMonth.forEach((month) => {
          row[month]['CMP'] =  parseFloat((row['CMP'] * (this.percentRow[month] / 100)).toFixed(2));
          row[month]['Total'] =  parseFloat((row['Total'] * (this.percentRow[month] / 100)).toFixed(2));
        });
      }
    });
  }




  calculateOtherRow(value, ) {
    let other: OtherRow;
    let total: TotalRow;
    let result: number;
    result = 0;
    this.table.forEach((e) => {
      if (e instanceof OtherRow) {
        other = e;
      } else if (e instanceof TotalRow) {
        total = e;
      } else {
        result = result + (+e[value]);
      }
    });
    other[value] = total[value] - result;
  }

  calculateCellRow( row, month, event ) {
    if (row instanceof ROW) {
      row.calculateTotal(row, event);
    }

    if (row instanceof TotalRow) {
      return;
    } else if (row instanceof ROW) {
      this.calculateTotalCELL(month, event);
    }
  }

  calculateTotalCELL(month, event) {
    let total:  TotalRow;
    let result: number;
    result = 0;
    this.table.forEach((e) => {
      if (e instanceof TotalRow) {
        total = e;
      } else {
        result = result + (+e[month][event]);
      }
    });
    total[month][event] = result;
    total.calculateTotal(total, event);
  }


  clickOn() {
    // this.table.createMonth(['ffff111', 'ffff222', 'ffff333']);
    console.log(this.table);
    // this.table.forEach((e) => {
    //   console.log(e instanceof PercentRow);
    // });

  }

}
