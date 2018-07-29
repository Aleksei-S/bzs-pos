import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicInfoService } from '../service/basic-info.service';

export class YEARSUMMA {
  year: number;
  resultCMP: number;
  constructor() {
    this.resultCMP = 0;
    this.year = 0;
  }
}

@Component({
  selector: 'app-calculation-storehouse',
  templateUrl: './calculation-storehouse.component.html',
  styleUrls: ['./calculation-storehouse.component.css']
})
export class CalculationStorehouseComponent implements OnInit {

  coef = 0;
  private yearSumma: YEARSUMMA;
  private yearSumma$: Subscription;

  private store = 0;
  // private store = 0;

  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
    this.yearSumma = new YEARSUMMA();
    console.log('ngOnInit Storehouse');
    this.yearSumma$ = this.infoService.yearSumma$
    .subscribe((arrObj: any[]) => {
      this.calculateYearSumma(arrObj);
    });
  }

  changeCoef(e) {
    this.infoService.coef$.next(e);
    this.coef = e;
  }

  calculateYearSumma(arrObj) {
    let moreCMP = 0;
    arrObj.forEach((e: YEARSUMMA) => {
      if (e.resultCMP > moreCMP) {
        moreCMP = e.resultCMP;
        this.yearSumma = e;
      }
    });
  }

}
