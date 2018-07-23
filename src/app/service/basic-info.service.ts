import { Injectable } from '@angular/core';
import { BehaviorSubject,  Subject} from 'rxjs';
import {Moment} from 'moment';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {

  public date$: BehaviorSubject<Moment> = new BehaviorSubject<Moment>(moment(new Date));
  public lastingBuilding$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public coef$: Subject<number> = new Subject<number>();
  public yearSumma$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // var dateObj = new Date(dateString);
  // var momentObj = moment(dateObj);
  // var momentString = momentObj.format('YYYY-MM-DD'); // 2016-07-15
  constructor() { }






}
