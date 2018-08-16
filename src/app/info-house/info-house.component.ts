import { Component, ViewChild, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, Observable, fromEvent, of, forkJoin, combineLatest, Subscription, merge, Subject } from 'rxjs';
import { switchMap, takeUntil, map, pairwise, concatAll, take, zip, mergeMap } from 'rxjs/operators';
import { BasicInfoService } from '../service/basic-info.service';
import { KonvaComponent } from 'ng2-konva';
import { DrawLAND, DrawARROW, DrawARROWo } from './object/draw';

declare const Konva: any;



@Component({
  selector: 'app-info-house',
  templateUrl: './info-house.component.html',
  styleUrls: ['./info-house.component.css']
})
export class InfoHouseComponent implements OnInit, AfterViewInit {

  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('layerLand') layerLand: KonvaComponent;
  @ViewChild('layerWater') layerWater: KonvaComponent;
  @ViewChild('layerfreeDraw') layerfreeDraw: KonvaComponent;
  @ViewChild('layerLevel_0') layerLevel_0: KonvaComponent;


  public width = 400;
  public height = 400;
  private coef = 35;

  private level_0 = 0;
  private level_ground_middle = 0;
  private level_pit_middle = 0;
  private maxLevel_water = 0;










  options: string[] = ['Ленточный фундамент', 'Монолитная плита', 'Сваи'];
  public newsForm: FormGroup;



  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor(private fb: FormBuilder, private basicInfoService: BasicInfoService) { }

  ngOnInit() { }




  ngAfterViewInit() {
    const layer = this.layerfreeDraw.getStage();
    const stage = this.stage.getStage();
    let isPaint = false;
    let line: any;

    stage.on('mouseup', (e) => {
      if (!isPaint) { return; }
      line.points(line.points().concat([stage.getPointerPosition().x, stage.getPointerPosition().y]));
      layer.draw();
      isPaint = false;
    });

    stage.on('mousedown', (e) => {
      if (e.target.nodeType !== 'Stage') { return; }
        isPaint = true;
        line = new Konva.Line({
          points: [stage.getPointerPosition().x, stage.getPointerPosition().y],
          stroke: 'black',
          strokeStyle: '#df4b26',
          lineJoin: 'round',
          lineWidth: 5,
          strokeWidth: 3,
          lineCap: 'round',
        });
        layer.add(line);
    });
      stage.on('mousemove', (e) => {
        if (!isPaint) { return; }
          line.points(line.points().concat([stage.getPointerPosition().x, stage.getPointerPosition().y]));
          layer.draw();
      });



  }












  add() {
    const layer = this.layerLand.getStage();
    const stage = this.stage.getStage();
    const land = this.basicInfoService.drawLand(this.width, this.height, this.coef, 2);
    layer.add(new Konva.Line(land));
    // stage.draw();

    const layer2 = this.layerWater.getStage();
    const waterLine = this.basicInfoService.drawWater(this.width, this.height, this.coef, 4);
    layer2.add(new Konva.Line(waterLine));
    stage.draw();


    // drawMark(x, y, coef = 35, direction = 1, otm = '+0.000')
    const group = new Konva.Group({
      x: 200,
      y: 200,
      draggable: true
    });
    const mark = this.basicInfoService.drawMark(1, '+0.000')
    group.add(new Konva.Line(mark.arrow), new Konva.Line(mark.arrowEnd), new Konva.Text(mark.text));
    layer2.add(group);
    layer2.draw();
    // stage.draw();
  }


  delFF() {

    const layer = this.layerWater.getStage();
    const stage = this.stage.getStage();
    const layer2 = this.layerfreeDraw.getStage();
    // stage.draw();
    // // layer.remove(this.land);
    // this.land.LAND.remove();
    // stage.draw();
    layer2.destroyChildren();
    stage.draw();

  }

  back() {
    const layer = this.layerfreeDraw.getStage();
    const stage = this.stage.getStage();

    // stage.draw();
    // // layer.remove(this.land);
    // this.land.LAND.remove();
    // stage.draw();
    layer.children.pop();
    stage.draw();

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


  takeMiddlFromArray(arr: any[]) {
    let count = 0;
    arr.forEach(e => {
      count = count + parseFloat(e.replace(',', '.'));
    });
    return count / (arr.length);
  }

  changeLevel_0(e) {
    e = e.replace(',', '.');
    this.level_0 = parseFloat(e);
    this.checkDraw();
  }

  changeLevel_ground(e) {
    const levelGroundArr = e.match(/\d*[.,]?\d+/gm);
    if (!levelGroundArr) { return; }
    this.level_ground_middle = this.takeMiddlFromArray(levelGroundArr);
    this.checkDraw();
  }

  changeLevel_pit(e) {
    const level_pitArr = e.match(/\d*[.,]?\d+/gm);
    if (!level_pitArr) { return; }
    this.level_pit_middle = this.takeMiddlFromArray(level_pitArr);
    this.checkDraw();
  }
  changeLevel_water(e) {
    const arrWarter = e.match(/\d*[.,]?\d+/gm);
    if (!arrWarter) {
      return;
    }
    const maxLevel_water = 0;
    const arr = arrWarter.map(element => {
      element = element.replace(',', '.');
      element = parseFloat(element);
      if (maxLevel_water < element) {
        this.maxLevel_water = element;
      }
    });
    this.checkDraw();
  }

  checkDraw() {
    const stage = this.stage.getStage();

    if (!this.level_ground_middle) {
      return;
    } else

    if (this.maxLevel_water) {
      const layer = this.layerWater.getStage();
      layer.destroyChildren();
      const h = this.level_ground_middle - this.maxLevel_water;
      const waterLine = this.basicInfoService.drawWater(this.width, this.height, this.coef, h);
      layer.add(new Konva.Line(waterLine));
      const group = new Konva.Group({
        x: this.width * 0.8,
        y: this.height * 0.4 + h * this.coef,
      });
      const mark = this.basicInfoService.drawMark(1, this.maxLevel_water.toFixed(3));
      group.add(new Konva.Line(mark.arrow), new Konva.Line(mark.arrowEnd), new Konva.Text(mark.text));
      layer.add(group);
      layer.draw();
    }

    if (this.level_pit_middle && this.level_0) {

      const layer = this.layerLand.getStage();
      layer.destroyChildren();
      const h = this.level_ground_middle - (this.level_0 - this.level_pit_middle);
      const land = this.basicInfoService.drawLand(this.width, this.height, this.coef, h);
      layer.add(new Konva.Line(land));
      {

        const group2 = new Konva.Group({
          x: this.width * 0.8,
          y: this.height * 0.4,
        });
        const mark2 = this.basicInfoService.drawMark(1, this.level_ground_middle.toFixed(3));
        group2.add(new Konva.Line(mark2.arrow), new Konva.Line(mark2.arrowEnd), new Konva.Text(mark2.text));
        layer.add(group2);
        layer.draw();
      }
      const group = new Konva.Group({
        x: this.width * 0.8,
        y: this.height * 0.4 + h * this.coef,
        // draggable: true
      });
      const mark = this.basicInfoService.drawMark(1, (this.level_0 - this.level_pit_middle).toFixed(3));
      group.add(new Konva.Line(mark.arrow), new Konva.Line(mark.arrowEnd), new Konva.Text(mark.text));
      layer.add(group);
      layer.draw();
     
      // const layer2 = this.layerWater.getStage();
      // const waterLine = this.basicInfoService.drawWater(this.width, this.height, this.coef, 4);
      // layer2.add(new Konva.Line(waterLine));
      // stage.draw();
  
    }

  // private level_0 = 0;
  // private level_ground_middle = 0;
  // private level_pit_middle = 0;
  // private level_water_middle = 0;
  }

  drawLandCheck() {}



}

