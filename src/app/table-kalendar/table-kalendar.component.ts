import { Component, OnInit } from '@angular/core';
import { ROW, PercentRow, TotalRow, OtherRow, MainRow, CELL } from './object/row';
import { Subscription } from 'rxjs';
import { BasicInfoService } from '../service/basic-info.service';
import { TableKalendarService } from './table-kalendar.service';

import { Moment } from 'moment';
import * as moment from 'moment';
import { tick } from '../../../node_modules/@angular/core/testing';

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
  dragIndex: number;

  constructor(private infoService: BasicInfoService,
    private tableService: TableKalendarService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit tabl');
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
    this.table.push(new ROW('Подготовка территории'));
    this.table.push(new MainRow());
    this.table.push(new ROW('Инженерные сети'));
    this.table.push(new ROW('Временные здания'));
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
    this.percentRow = new PercentRow(arrMonth);
    this.setValuePercentRow();
  }


  setValuePercentRow() {
    const arrPercent = this.tableService.getPercentRow(this.lastingBuilding);
    if (arrPercent === undefined) { return; }
    for (let index = 0; index < +this.lastingBuilding; index++) {
      const month = this.percentRow.arrMonth[index];
      this.percentRow[month] = arrPercent[index];
    }
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
          row[month]['CMP'] = parseFloat((row['CMP'] * (this.percentRow[month] / 100)).toFixed(2));
          row[month]['Total'] = parseFloat((row['Total'] * (this.percentRow[month] / 100)).toFixed(2));
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
        result = parseFloat((result + (+e[value])).toFixed(2));
      }
    });
    other[value] = parseFloat((total[value] - result).toFixed(2));
  }

  calculateCellRow(row, month, event) {
    row.calculateTotal();
    if (!(row instanceof TotalRow)) {
      this.calculateTotalRow(month, event);
    }
  }

  calculateTotalRow(month, event) {
    let total: TotalRow;
    let result = 0;
    this.table.forEach((e) => {
      if (e instanceof TotalRow) {
        total = e;
      } else {
        result = parseFloat((result + (+e[month][event])).toFixed(2));

        // result =  parseFloat((result + (+e[month][event])).toFixed(2));
      }
    });
    total[month][event] = result;
    total.calculateTotal();
  }


  clickOn() {
    // this.table.createMonth(['ffff111', 'ffff222', 'ffff333']);
    console.log(this.table);
    // this.table.forEach((e) => {
    //   console.log(e instanceof PercentRow);
    // });

  }


  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev, index) {
    this.dragIndex = index;
  }

  drop(ev, index) {
    // менять местами
    [this.table[this.dragIndex], this.table[index]] = [this.table[index], this.table[this.dragIndex]];
  }

  dropBasket(ev) {
    if (this.table[this.dragIndex] instanceof TotalRow ||
      this.table[this.dragIndex] instanceof OtherRow ||
      this.table[this.dragIndex] instanceof MainRow) { return; }
    this.table.splice(this.dragIndex, 1); // удалить 1 строку
  }




  saveTable() {
    // console.log('ngOnDestroy');
    if (this.arrMonth.length === 0) {
      return;
    }
    let total: TotalRow;
    this.table.forEach((e) => {
      if (e instanceof TotalRow) {
        total = e;
      }
    });

    const keys = [];
    let year = this.arrMonth[0].slice(-4);
    let resultCMP = 0;
    this.arrMonth.forEach((month) => {
      if (year !== month.slice(-4)) {
        keys.push({ year: year, resultCMP: resultCMP });
        resultCMP = total[month]['CMP'];
        year = month.slice(-4);
      } else {
        resultCMP = parseFloat((resultCMP + (+total[month]['CMP'])).toFixed(2));
      }
    });
    // parseFloat((result + (+e[month][event])).toFixed(2));
    keys.push({ year: year, resultCMP: resultCMP });
    this.infoService.yearSumma$.next(keys);
  }



}
