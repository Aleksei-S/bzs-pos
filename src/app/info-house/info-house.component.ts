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
  // @ViewChild('qroup') qroupArrow: KonvaComponent;
  // @ViewChild('line') line: KonvaComponent;

  public width = 400;
  public height = 400;


  public land: any;
  options: string[] = ['Ленточный фундамент', 'Монолитная плита', 'Сваи'];

  public newsForm: FormGroup;



  public configStage: Observable<any> = of({
    container: 'container',
    width: this.width,
    height: this.height,
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {


  }


  add() {
    const layer = this.layer.getStage();
    const stage = this.stage.getStage();
    this.land =  new Konva.Star({
      x: 0.5 * 800,
      y: 0.5 * 200,
      rotation: Math.random() * 180,
      numPoints: 5,
      innerRadius: 30,
      outerRadius: 50,
      fill: '#89b717',
      opacity: 0.8,
      draggable: true,
      scaleX: 0.5,
      scaleY: 0.5,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      shadowOpacity: 0.6,
      startScale: 1
    });
    layer.add(this.land);
    stage.draw();
    console.log('draw ');
  }


  delFF() {
    const layer = this.layer.getStage();
    const stage = this.stage.getStage();
    // layer.remove(this.land);
    this.land.remove();
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

