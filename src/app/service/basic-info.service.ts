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

  drawDemensionLand(x, y, coef = 35, h = 0) {
    const landLevel = y * 0.4;
    const pozitionDemension = x * 0.85;
    const poinLand = y * 0.4;
    const poinPit = y * 0.4;
    const downPit = poinLand + h * coef;
    return {
      demension: {
        points: [
          pozitionDemension, landLevel,
          pozitionDemension - 5, landLevel - 5,
          pozitionDemension + 5, landLevel + 5,
          pozitionDemension, landLevel,
          pozitionDemension, downPit,
          pozitionDemension - 5, downPit - 5,
          pozitionDemension + 5, downPit + 5,
          pozitionDemension, downPit,
          pozitionDemension  + 7, downPit,
          pozitionDemension - 30, downPit,
        ],
        stroke: 'green',
        strokeWidth: 1,
        lineJoin: 'round'
      },
      text: {
        x: pozitionDemension  + 5,
        y: landLevel + (h * coef / 2) - 10,
        text: h.toFixed(1).replace('.', ',') + 'м',
        fontSize: 20,
        draggable: true,
        fontFamily: 'Calibri',
        fill: 'green'
      }
    };


  }
  // this.demension = of({
  //   points: [
  //     pozitionDemension, landLevel,
  //     pozitionDemension - 5, landLevel - 5,
  //     pozitionDemension + 5, landLevel + 5,
  //     pozitionDemension, landLevel,
  //     pozitionDemension, downPit,
  //     pozitionDemension - 5, downPit - 5,
  //     pozitionDemension + 5, downPit + 5,
  //     pozitionDemension, downPit,
  //     pozitionDemension  + 7, downPit,
  //     pozitionDemension - 30, downPit,
  //   ],
  //   stroke: 'green',
  //   strokeWidth: 1,
  //   lineJoin: 'round'
  // });
  //  this.textDemension = of({
  //   x: pozitionDemension - 20,
  //   y: downPit - 15,
  //   text: h.toFixed(1) + 'м',
  //   fontSize: 20,
  //   rotation: 270,
  //   draggable: true,
  //   fontFamily: 'Calibri',
  //   fill: 'green'
  // });

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
      obj.x = 10; obj.y = -45; //top rigt  1
    } else if (direction === 2) {
      obj.x = -60; obj.y = -45; ////top left  2
    } else if (direction === 3) {
      obj.x = -60; obj.y = 0; //botttom left 3
    } else {
      obj.x = 10; obj.y = 25; //top rigt  1
      // obj.x = 15; obj.y = 0; //botttom rigt
    }
    const text = this.drawText(obj.x, obj.y, otm);

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
      stroke: 'blue',
      strokeWidth: 2,
    };
  }




  drawText(x, y, text) {
    return {
      x: x,
      y: y,
      text: text,
      fontSize: 20,
      draggable: true,
      fontFamily: 'Calibri',
      fill: 'green',
      name: 'myText'
    };
  }
}
