import { Component, ViewChild, ElementRef, Input, OnInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable, fromEvent, of, forkJoin, combineLatest, Subscription, merge, Subject } from 'rxjs';
import {  switchMap, takeUntil, map, pairwise, concatAll, take, zip, mergeMap  } from 'rxjs/operators';
import { KonvaComponent } from 'ng2-konva';
import { DrawLAND, DrawARROW } from './object/draw';

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
  public arrowGr:  Observable<any> = of({
    x: 200,
    y: 200,
  });

  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit() {

    this.initLand();

    this.arrowGr = of({
      x: 200,
      y: 200,
      draggable: true
    });

    this.listArrow.push(new DrawARROW(150, 10, 0, 'zzzz'));






    this.initForm();


  }

  initLand() {
    this.land = new DrawLAND(this.width, this.height);
  }


  clear() {
    const aa =  '134,45-124,12';
    const arr = [];
    console.log(aa.match(/\d*[.,]?\d+/gm));

    this.listArrow.push(new DrawARROW(150, 15, 0, 'DDDDDDDDDDDDDD'));

    // new DrawARROW(x / 2 , downPit + 3, 0, 'FFFFFFFF'),
    // this.line.getStage().clearCache();
    // this.land.drawWater();
    this.qroupArrow.getStage().draw();
    // this.layer.getStage().draw();
    // this.line.getStage().draw();
    // console.log(this.land);
    // console.log(this.stage);
    // console.log(this.stage.getStage());
  
    // this.land = new DrawLAND(this.width, this.height);
    // const shape = ngComponent.getStage();
    // const layer = ng.layer.getStage();
    // const stage = ng.stage.getStage();
    // shape.moveTo(layer);
    // stage.draw();
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
    this.land = new DrawLAND(this.width, this.height, 2, 3);
    this.stage.getStage().draw();
    console.log(this.stage);
    // <ko-group #qroup *ngFor="let arrow of listArrow" [config]="arrowGr">
    // <ko-stage #stage [config]="configStage">
  }









}

