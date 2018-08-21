import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Moment } from 'moment';
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


  drawLand(x, y, coef = 35, h = 0) {
    const landLevel = y * 0.4;
    const downPit = landLevel + h * coef;
    return {
      points: [
        0, landLevel,
        x * 0.15, landLevel,
        x * 0.15 + (h * 0.6 * coef), downPit,
        x * 0.75 - (h * 0.6 * coef), downPit,
        x * 0.75, landLevel,
        x, landLevel
      ],
      stroke: 'black',
      strokeWidth: 4,
      lineJoin: 'round'
    };
  }

  drawWater(x, y, coef = 35, h = 0) {
    const landLevel = y * 0.4;
    const waterLvl = landLevel + h * coef;
    return {
      points: [
        0, waterLvl,
        x, waterLvl
      ],
      stroke: 'blue',
      strokeWidth: 2,
      dash: [33, 15],
      lineJoin: 'round'
    };
  }

  drawMark(direction = 1, otm = '+0.000') {


    const arrow = {
      x: 0,
      y: 0,
      points: (direction === 1) ? [0, 0, 0, -23, 70, -23] : //top rigt  1
        (direction === 2) ? [0, 0, 0, -23, -70, -23] : //top left  2
          (direction === 3) ? [0, 0, 0, 23, -70, 23] : //botttom left 3
            [0, 0, 0, 23, 70, 23], //botttom rigt
      stroke: 'black',
      strokeWidth: 1,
      lineJoin: 'round'
    };
    const arrowEnd = {
      x: 0,
      y: 0,
      points: (direction === 1 || direction === 2) ? [-10, -10, 0, 0, 10, -10] : //top
        [-10, 10, 0, 0, 10, 10], //botttom
      stroke: 'black',
      strokeWidth: 4,
      lineJoin: 'round'
    };
    const obj = {
      x: 0,
      y: 0
    };

    if (direction === 1) {
      obj.x = 15; obj.y = -45; //top rigt  1
    } else if (direction === 2) {
      obj.x = -60; obj.y = -45; ////top left  2
    } else if (direction === 3) {
      obj.x = -60; obj.y = 0; //botttom left 3
    } else {
      obj.x = 15; obj.y = 0; //botttom rigt
    }
    const text = {
        x: obj.x,
        y: obj.y,
        text: otm,
        fontSize: 20,
        draggable: true,
        fontFamily: 'Calibri',
        fill: 'green'
      };

    return {
      'arrow': arrow,
      'arrowEnd': arrowEnd,
      'text': text,
    };
  }

  drawLevel_0() {
    return {
      y: -8,
      width: 120,
      height: 40,
      stroke: 'red',
      strokeWidth: 2,
    };
  }


}
