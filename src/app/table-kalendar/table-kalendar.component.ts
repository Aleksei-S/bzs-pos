import { Component, OnInit } from '@angular/core';
import { ROW, CELL } from './object/row';


@Component({
  selector: 'app-table-kalendar',
  templateUrl: './table-kalendar.component.html',
  styleUrls: ['./table-kalendar.component.css']
})
export class TableKalendarComponent implements OnInit {
  table: any;
  constructor() { }

  ngOnInit() {
    this.table = new ROW('FFFFFFFFFFF');
    console.log(this.table);
  }

  clickOn() {
    this.table.createMonth(['ffff111', 'ffff222', 'ffff333']);
    console.log(this.table);
  }

  clickOn2() {
    this.table.createMonth(['ZZZZZZZZ']);
    console.log(this.table);
  }

  clickOn3() {
    // this.table.createMonth('ZZZZZZZZ');
    console.log(this.table.calculateTotal());
  }


}
