import { Component, ViewChild, ElementRef, Input, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, of } from 'rxjs';
import { combineLatest, switchMap, takeUntil, map, pairwise } from 'rxjs/operators';
import { KonvaComponent } from 'ng2-konva';

declare const Konva: any;



@Component({
  selector: 'app-info-house',
  templateUrl: './info-house.component.html',
  styleUrls: ['./info-house.component.css']
})
export class InfoHouseComponent implements OnInit {

  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('layer') layer: KonvaComponent;
  @ViewChild('qroup') qroupArrow: KonvaComponent;
  @ViewChild('line') line: KonvaComponent;
  // @ViewChild('arrow') arrow: KonvaComponent;
  // @ViewChild('layer') layer: KonvaComponent;
  // @ViewChild('dragLayer') dragLayer: KonvaComponent;
  // @ViewChild('arrW') arrW: KonvaComponent;

  // @ViewChild('layer2') layer2: KonvaComponent;
  public width = 400;
  public height = 400;

  public listArrow: Array<any> = [];
  public arrowGr: Observable<any>;


  public land: any;

  // public list: Array<any> = [];
  // public item: Observable<any>;
  // public land: Observable<any>;
  // public bal: any;
  // public land2: Observable<any>;
  // public bal2: any;
  // public arrow: Observable<any>;
  // public arrowLine: any;
  // public text: Observable<any>;
  // public textObj: any;


  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor() { }

  ngOnInit() {

    this.initLand();
  }

  initLand() {
    // this.arrowGr = of({
    //   x: 200,
    //   y: 200,
    //   draggable: true
    // });

    this.land = new DrawLAND(400, 400);


  }


  clear() {
    this.stage.getStage().draw();
  }


}





export class DrawLAND {
  lineLand: any;
  demension: any;
  waterLevel: any;
  arrowList = [];

  textDemension: any;
  textWaterLevel: any;
  coef = 35;
  constructor(x = 400, y = 400, h = 2, waterLevel = 3) {
    const landLevel = y * 0.4;
    const downPit = landLevel + h * this.coef;
    const waterLvl = landLevel + waterLevel * this.coef;
    const pozitionDemension = x * 0.85;
    this.lineLand = of({
      points: [
        0, landLevel,
        x * 0.15, landLevel,
        x * 0.15 + (h * 0.6 * this.coef), downPit,
        x * 0.75 - (h * 0.6 * this.coef), downPit,
        x * 0.75, landLevel,
        x, landLevel
      ],
      stroke: 'black',
      strokeWidth: 4,
      lineJoin: 'round'
    });

    this.demension = of({
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
    });

    this.textDemension = of({
      x: pozitionDemension - 20,
      y: downPit - 15,
      text: h.toFixed(1) + 'м',
      fontSize: 20,
      rotation: 270,
      draggable: true,
      fontFamily: 'Calibri',
      fill: 'green'
    });


    this.waterLevel = of({
      points: [
        0, waterLvl,
        x, waterLvl
      ],
      stroke: 'blue',
      strokeWidth: 2,
      dash: [33, 15],
      lineJoin: 'round'
    });

    // this.arrowList = new DrawARROW(1, 'FFFFFFFF');

    this.arrowList.push(
      new DrawARROW(x / 2 , downPit + 3, 0, 'FFFFFFFF'),
      new DrawARROW(pozitionDemension - 25, landLevel, 1, 'FFFFFFFF'),
      new DrawARROW(x / 8, waterLvl + 3, 0, 'FFFFFFFF'),
    );

  }

}







export class DrawARROW {
  arrowGroup: any;
  arrow: any;
  arrowEnd: any;
  text: any;

  otm: string;
  direction: number;
  directionValuer = [0, 1, 2, 3];

  constructor(moveX = 200, moveY = 200, direction = 0, otm = '0.000') {
    this.direction = direction;
    this.otm = otm;
    this.arrow = of({
      x: 0,
      y: 0,
      points: (direction === 1) ? [0, 0, 0, -23, 70, -23] : //top rigt  1
        (direction === 2) ? [0, 0, 0, -23, -70, -23] : //top left  2
          (direction === 3) ? [0, 0, 0, 23, -70, 23] : //botttom left 3
            [0, 0, 0, 23, 70, 23], //botttom rigt
      stroke: 'black',
      strokeWidth: 1,
      lineJoin: 'round'
    });
    this.arrowEnd = of({
      x: 0,
      y: 0,
      points: (direction === 1 || direction === 2) ? [-10, -10, 0, 0, 10, -10] : //top
        [-10, 10, 0, 0, 10, 10], //botttom
      stroke: 'black',
      strokeWidth: 4,
      lineJoin: 'round'
    });

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
    this.text = of({
      x: obj.x,
      y: obj.y,
      text: this.otm,
      fontSize: 20,
      draggable: true,
      fontFamily: 'Calibri',
      fill: 'green'
    });


    this.arrowGroup = of({
      x: moveX,
      y: moveY,
      draggable: true
    });
  }

}
