import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicInfoService } from '../service/basic-info.service';
// import { CalculationStorehouseService, RESOURCE } from './calculation-storehouse.service';

export class YEARSUMMA {
  year: number;
  resultCMP: number;
  constructor() {
    this.resultCMP = 0;
    this.year = 0;
  }
}

export class RESOURCE {
  electric: number;
  oil: number;
  vapor: number;
  compresAir: number;
  waterHouse: number;
  oxyden: number;
  constructor(electric = 0, oil = 0, vapor = 0, compresAir = 0, waterHouse = 0, oxyden = 0) {
    this.electric = electric;
    this.oil = oil;
    this.vapor = vapor;
    this.compresAir = compresAir;
    this.waterHouse = waterHouse;
    this.oxyden = oxyden;
  }
}

@Component({
  selector: 'app-calculation-storehouse',
  templateUrl: './calculation-storehouse.component.html',
  styleUrls: ['./calculation-storehouse.component.css']
})
export class CalculationStorehouseComponent implements OnInit {

  coef = 0;
  private yearSumma: YEARSUMMA[];
  private arrResourceTable: RESOURCE[];
  private yearMaxSumma = 0;
  private yearSumma$: Subscription;


  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
    // this.yearSumma = new YEARSUMMA();
    console.log('ngOnInit Storehouse');
    this.yearSumma$ = this.infoService.yearSumma$
    .subscribe((arrObj: any[]) => {
      this.yearMaxSumma = 0;
      this.yearSumma = arrObj;
      this.calcMaxYearSumma();
    });
  }

  changeCoef(e) {
    this.infoService.coef$.next(e);
    this.coef = e;
    this.calcResourceTable();
  }

  calcMaxYearSumma() {
    this.yearSumma.forEach((e: YEARSUMMA) => {
      if (e.resultCMP > this.yearMaxSumma) {
        console.log(e);
        this.yearMaxSumma = e.resultCMP;
      }
    });
    this.calcResourceTable();
  }


  clickOn() {
    console.log(this.yearMaxSumma);
    console.log(this.yearSumma);
    console.log(this.arrResourceTable);
  }

  calcResourceTable() {
    const arr = [];
    this.yearSumma.forEach(element => {
      arr.push(this.getResourceCoef(element.resultCMP, this.coef));
    });
    this.arrResourceTable = arr;
  }

  calcCellResourceTable(summa, k: number, res: number, ceil = false) {
    if (this.coef === 0) { return '-'; }
    const a = (summa / (2.7 * 1267 * this.coef) * res * k).toFixed(2);
    if (ceil !== false) {
      return Math.ceil( parseFloat(a) );
    }

    return a;
  }
 
  getResourceCoef(summa, coef) {
    const summaPlusCoef = summa / (2.7 * 1267 * coef);
    if (summaPlusCoef < 0.50) {   // до 0,5
      return new RESOURCE(205, 97, 200, 3.9, 0.3, 4400);
    } else if (0.5 < summaPlusCoef && summaPlusCoef < 1.01) {  // до 1
      return new RESOURCE(185, 69, 185, 3.2, 0.23, 4400);
    } else if (1.0 < summaPlusCoef && summaPlusCoef < 1.51) { // до 1,5
      return new RESOURCE(140, 52, 160, 3.2, 0.2, 4400);
    } else if (1.5 < summaPlusCoef && summaPlusCoef < 2.01) { // до 2
      return new RESOURCE(100, 44, 140, 2.6, 0.16, 4400);
    } else if (2.5 < summaPlusCoef && summaPlusCoef < 3.1) { // до 2,5
      return new RESOURCE(70, 40, 130, 2.6, 0.16, 4400);
    } else { // до 3 (3.0 < summaPlusCoef)
      return new RESOURCE(70, 40, 120, 2.3, 0.16, 4400);
    }
  }
}
