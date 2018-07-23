import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BasicInfoService } from '../service/basic-info.service';


@Component({
  selector: 'app-calculation-workers',
  templateUrl: './calculation-workers.component.html',
  styleUrls: ['./calculation-workers.component.css']
})
export class CalculationWorkersComponent implements OnInit {
  workCapacity = 0;
  lastingBuilding = 0;
  private lastingBuilding$: Subscription;

  private sumWorkers = 0;
  private workers = 0;
  private ITR = 0;
  private workingInTheShift = 0;
  private ITRInTheShift = 0;
  private sumInTheShift = 0;

  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
    this.lastingBuilding$ = this.infoService.lastingBuilding$
    .subscribe((num) => {
      this.lastingBuilding = num;
      this.calculationWorkers();
    });
  }

  calculateTable(event) {
    this.workCapacity = event;
    this.calculationWorkers();
  }

  calculationWorkers() {
    if (this.workCapacity === 0 || this.lastingBuilding === 0) {
      return;
    }
    this.sumWorkers = parseFloat((this.workCapacity / (8 * this.lastingBuilding * 22)).toFixed(0));
    this.ITR = parseFloat((this.sumWorkers * 0.155).toFixed(0));
    this.workers = this.sumWorkers - this.ITR;
    this.workingInTheShift = parseFloat((this.workers * 0.7).toFixed(0)); // в т.ч. рабочих * 70 %
    this.ITRInTheShift = parseFloat((this.ITR * 0.8).toFixed(0)); // ИТР * 80%
    this.sumInTheShift = Math.ceil(this.workingInTheShift + (this.ITRInTheShift * 0.5)); // (34+7x0,5) = 38 чел

  }
  onClick() {
    console.log(this);
  }

}
