import { Component, ViewChild, ElementRef, Input, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable, fromEvent, of, forkJoin, combineLatest, Subscription, merge, Subject } from 'rxjs';
import { switchMap, takeUntil, map, pairwise, concatAll, take, zip, mergeMap } from 'rxjs/operators';
import { KonvaComponent } from 'ng2-konva';
import { DrawLAND, DrawARROW, DrawARROWo } from './object/draw';

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

  public width = 400;
  public height = 400;

  public listArrow: Array<any> = [];
  public land: any;
  options: string[] = ['Ленточный фундамент', 'Монолитная плита', 'Сваи'];

  public newsForm: FormGroup;
  public arrowGr: Observable<any> = of({
    x: 200,
    y: 200,
    draggable: true,
  });

  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

   this.listArrow.push(new DrawARROW(150, 10, 0, 'zzzz'));

  }




  clear() {


    this.listArrow.push(new DrawARROW(150, 15, 0, 'DDDDDDDDDDDDDD'));

    const layer = this.layer.getStage();
    const stage = this.stage.getStage();
    const scale = Math.random();
      // console.log(this.layer.getConfig());
      // console.log(this.stage.getConfig());
  // const ff =  new Konva.Star({
  //   x: Math.random() * 800,
  //   y: Math.random() * 200,
  //   rotation: Math.random() * 180,
  //   numPoints: 5,
  //   innerRadius: 30,
  //   outerRadius: 50,
  //   fill: '#89b717',
  //   opacity: 0.8,
  //   draggable: true,
  //   scaleX: scale,
  //   scaleY: scale,
  //   shadowColor: 'black',
  //   shadowBlur: 10,
  //   shadowOffsetX: 5,
  //   shadowOffsetY: 5,
  //   shadowOpacity: 0.6,
  //   startScale: scale
  // });


  // const zz =  new Konva.group(new DrawARROWo(150, 15, 0, 'EEEEEEEEEEE'));

  const group = new Konva.Group({
    x: 120,
    y: 40,
    draggable: true,
  });

  group.on('dblclick', function (evt, a) {
    console.log(a);
    console.log(evt);

   });


group.add(new Konva.Line(new DrawARROWo(150, 15, 0, 'EEEEEEEEEEE').arrow));
group.add(new Konva.Line(new DrawARROWo(150, 15, 0, 'EEEEEEEEEEE').arrowEnd));
// group.add(new DrawARROWo(150, 15, 0, 'EEEEEEEEEEE').arrowEnd);
// group.add(new DrawARROWo(150, 15, 0, 'EEEEEEEEEEE').text);
    layer.add(group);
    stage.draw();
    console.log(this.line);

group.destroy();
stage.draw();
  }


  delFF() {
    // console.log(a);
    // console.log(evt);
  }



  private initForm() {
    this.newsForm = this.fb.group({
      level_0: ['', []],
      level_ground: ['', []],
      level_pit: ['', []],
      level_water: ['', []],
      typeFoundation: ['', []],
      // dateTimeEvent: [this.dateNowISO, [Validators.required, this.dataValidator]],
      numberStoreys: ['', []],
      numberSection: ['', []],
      S_apartments: ['', []],
      S_loft: ['', []],
      S_basement: ['', []],
    });
  }

  changeLevel_0(e) {
    console.log(e);
  }

  changeLevel_ground(e) {
    console.log(e);
  }

  changeLevel_pit(e) {
    console.log(e);
  }
  changeLevel_water(e) {
    const arrWarter = e.match(/\d*[.,]?\d+/gm);
    if (!arrWarter) {
      return;
    }
    let maxLevel_water = 0;
    const arr = arrWarter.map(element => {
      element = element.replace(',', '.');
      element = parseFloat(element);
      if (maxLevel_water < element) {
        maxLevel_water = element;
      }
      return element;
    });

    this.land.drawArrow();
    this.qroupArrow.getStage().draw();
    console.log(this.land);
    // this.land = new DrawLAND(this.width, this.height, 2, 3);
    this.stage.getStage().draw();
    console.log(this.stage);
    // <ko-group #qroup *ngFor="let arrow of listArrow" [config]="arrowGr">
    // <ko-stage #stage [config]="configStage">
  }









}

