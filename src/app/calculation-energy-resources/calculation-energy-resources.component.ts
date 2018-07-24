import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import {fromEvent} from 'rxjs';
import { fromEvent } from 'rxjs';
import { combineLatest, switchMap, takeUntil, map, pairwise } from 'rxjs/operators';

// import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/takeUntil';
// import { combineLatest, takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-calculation-energy-resources',
  templateUrl: './calculation-energy-resources.component.html',
  styleUrls: ['./calculation-energy-resources.component.css']
})
export class CalculationEnergyResourcesComponent implements AfterViewInit {
  // a reference to the canvas element from our template
  @ViewChild('canvas') public canvas: ElementRef;
  private cx: CanvasRenderingContext2D;
  // setting a width and height for the canvas
  @Input() public width = 400;
  @Input() public height = 400;

  constructor() { }

  ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {





    const mouseS = fromEvent(canvasEl, 'mousedown')
      .pipe(

        // let mouseMoves = fromEvent(canvasEl, 'mousemove');

        switchMap((val) => {

          return fromEvent(canvasEl, 'mousemove').pipe(

            // fromEvent(canvasEl, 'mousemove'),
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise(),
          );
        }),

    )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        // console.log(res);
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });

  }

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number }
  ) {
    // incase the context is not set
    if (!this.cx) { return; }
    this.drawLand(2);
    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.cx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }


  private drawLand(num) {


    this.cx.moveTo(0, 200);
    // this.cx.lineTo(50, 200);
    // this.cx.lineTo(100, 300);
    // this.cx.lineTo(300, 300);
    // this.cx.lineTo(350, 200);
    // this.cx.lineTo(400, 200);

    this.cx.lineTo(50, 200);
    this.cx.lineTo(100, 250);
    this.cx.lineTo(300, 250);
    this.cx.lineTo(350, 200);
    this.cx.lineTo(400, 200);
    this.cx.font = "italic 30px Arial";
    this.cx.fillText("Hello World",10,50);
    // гипотенуза
    // let c = Math.sqrt(num * num + num * num);


    // this.cx.moveTo(0, 200);
    // this.cx.lineTo(this.width, 200);
     this.cx.stroke();

    // this.cx.moveTo(0, 250);
    // this.cx.lineTo(this.width, 250);
    // this.cx.stroke();
  }


  private eventHz(num) {

  }





}
