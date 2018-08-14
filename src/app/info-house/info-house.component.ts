import { Component, ViewChild, ElementRef, Input, OnInit, NgZone } from '@angular/core';
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
export class InfoHouseComponent implements OnInit {

  @ViewChild('stage') stage: KonvaComponent;
  @ViewChild('layerLand') layerLand: KonvaComponent;
  @ViewChild('layerWater') layerWater: KonvaComponent;
  @ViewChild('layer') freeDraw: KonvaComponent;
  // @ViewChild('qroup') qroupArrow: KonvaComponent;
  // @ViewChild('line') line: KonvaComponent;

  public width = 400;
  public height = 400;
  private coef = 35;



  options: string[] = ['Ленточный фундамент', 'Монолитная плита', 'Сваи'];
  public newsForm: FormGroup;



  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor(private fb: FormBuilder, private basicInfoService: BasicInfoService) { }

  ngOnInit() { }


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
    // stage.draw();
    // // layer.remove(this.land);
    // this.land.LAND.remove();
    // stage.draw();
    layer.children.destroy();
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

  changeLevel_0(e) {
    console.log('changeLevel_0 ' + e);

  }

  changeLevel_ground(e) {
    console.log('changeLevel_ground ' + e);
  }

  changeLevel_pit(e) {
    console.log('changeLevel_pit ' + e);
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
  }









}

