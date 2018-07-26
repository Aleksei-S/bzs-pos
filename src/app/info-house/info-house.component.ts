import { Component, ViewChild, ElementRef, Input, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, of } from 'rxjs';
import { combineLatest, switchMap, takeUntil, map, pairwise } from 'rxjs/operators';
import { KonvaComponent } from 'ng2-konva';

declare const Konva: any;


export class LAND {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.drawLand(x, y, h);
  }
  h: number;
  y: number;
  x: number;
  drawLand(x, y, h) {
    const arr = [];
    arr.push(0);
    arr.push(y / 2); // 1
    arr.push(Math.ceil(x / 8));
    arr.push(y / 2); // 2
    arr.push(Math.ceil(x / 8 + h * 0.6));
    arr.push(y / 2 + h * 20); // 3
    // arr.push(Math.ceil(x / 8));
    // arr.push(y / 2 + h * 20); // 4
    // arr.push(Math.ceil(x / 8));
    // arr.push(y / 2 + h * 20); // 5
    // arr.push(Math.ceil(x / 8));
    // arr.push(y / 2 + h * 20); // 6
    return arr;
  }

}


@Component({
  selector: 'app-info-house',
  templateUrl: './info-house.component.html',
  styleUrls: ['./info-house.component.css']
})
export class InfoHouseComponent implements OnInit {

  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('line') line: KonvaComponent;
  @ViewChild('layer') layer: KonvaComponent;
  @ViewChild('dragLayer') dragLayer: KonvaComponent;
  @ViewChild('arrW') arrW: KonvaComponent;
  
  // @ViewChild('layer2') layer2: KonvaComponent;
  public width = 400;
  public height = 400;
  public list: Array<any> = [];
  public item: Observable<any>;
  public land: Observable<any>;
  public bal: any;
  public arrow: Observable<any>;
  public arrowLine: any;
  public text: Observable<any>;
  public textObj: any;
  
  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor(public ng: NgZone) { }

  ngOnInit() {

    this.initLand();
  }

  initLand() {
    // this.land = new BehaviorSubject({
    //   points: [0, 200],
    //   stroke: 'green',
    //   strokeWidth: 5,
    //   // lineCap: 'round',
    //   lineJoin: 'round'
    // });

    this.bal = {
      points: this.drawLand(400, 400 , 2),
      stroke: 'blue',
      strokeWidth: 3,
      lineJoin: 'round',
      draggable: true,
      // dash: [33, 10],
    };

    this.arrowLine = {
      x: 250,
      y: 200,
      points: [0, 0, 100, 0, 100, 50, ],
      pointerLength: 20,
      pointerWidth : 20,
      draggable: true,

      fill: 'black',
      stroke: 'black',
      strokeWidth: 2
    };

    this.textObj = {
      x: 250,
      y: 15,
      text: 'Simple Text',
      fontSize: 30,
      draggable: true,
      fontFamily: 'Calibri',
      fill: 'green'
    };

    this.land = of(this.bal);
    this.arrow = of(this.arrowLine);
    this.text = of(this.textObj);
  }

  drawLand(x, y, h) {
    x = x - 50;
    y = y - 50;
    const arr = [];
    arr.push(0);
    arr.push(y / 2); // 1
    arr.push(Math.ceil(x / 6));
    arr.push(y / 2); // 2
    arr.push(Math.ceil(x / 6 + h * 40 * 0.5));
    arr.push(y / 2 + h * 40); // 3
    arr.push(Math.ceil(x - (x / 6 + h * 40 * 0.5)));
    arr.push(y / 2 + h * 40); // 4
    arr.push(Math.ceil(x - x / 6));
    arr.push(y / 2 ); // 5
    arr.push(Math.ceil(x + 50));
    arr.push(y / 2); // 6
    return arr;
  }


  drawArrow() {

  }

  clear() {
    console.log(this.line);
    console.log(this.line.getStage());
    

    // this.line.getStage().attrs.move(200, 400);

    //  this.bal.move(200, 400);
    // //  this.land.next(this.bal.move(200, 400));
    // this.line.getStage().draw();
    // this.bal.move({
    //   x : 0,
    //   y : 105
    // });
    //  this.land = new BehaviorSubject(this.bal);
    // this.line.getStage()._strokeFunc();

    
    // console.log(this.line.getStage().position());
    // this.line.getStage().position({
    //   x : 200,
    //   y : 200
    // });
    // this.line.getStage().move({
    //   x : 50,
    //   y : 50
    // });

    // this.line.getStage().draw();
    // this.bal.setpos(200, 200);
    console.log(this.line.getStage().x());
    console.log(this.line.getStage().y());
    // this.bal.moveline(200, 0);
    this.stage.getStage().draw();
  }


}
