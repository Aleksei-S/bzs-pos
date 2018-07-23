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
  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
    this.lastingBuilding$ = this.infoService.lastingBuilding$
    .subscribe((num) => {
      this.lastingBuilding = num;
    });
  }

  calculateTable(event) {
    this.workCapacity = event;
  }

}
