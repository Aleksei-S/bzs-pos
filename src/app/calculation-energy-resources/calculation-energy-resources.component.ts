import { Component, AfterViewInit, ViewChild, ElementRef, Input} from '@angular/core';
import { Observable } from 'rxjs';
// import {fromEvent} from 'rxjs';
import {fromEvent} from 'rxjs';
import {  combineLatest, switchMap, takeUntil, map } from 'rxjs/operators';

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
    //   // switchMap((value: Event, index: number) => {
      map((e, i) => {
        console.log('e');
        console.log(e);
        // const mouseMoves = Observable.throw(e);
        // return mouseMoves;
        // fromEvent(canvasEl, 'mousemove');
      //  const mouseMoves = fromEvent(canvasEl, 'mousemove');
          // combineLatest(mouseMoves);
          // takeUntil(fromEvent(canvasEl, 'mouseup'));
          // takeUntil(fromEvent(canvasEl, 'mouseleave'));
          switchMap((mouseMoves) => {
            fromEvent(canvasEl, 'mousemove');
            takeUntil(fromEvent(canvasEl, 'mouseup'));
            takeUntil(fromEvent(canvasEl, 'mouseleave'));
            return Observable.throw(mouseMoves);
          });
        })
    //   // })
     )
    // .switchMap(event => innerObservable$)
    .subscribe((res) => {
      console.log(res);
         const rect = canvasEl.getBoundingClientRect();
  
        // // previous and current position with the offset
        // const prevPos = {
        //   x: res[0].clientX - rect.left,
        //   y: res[0].clientY - rect.top
        // };
  
        // const currentPos = {
        //   x: res[1].clientX - rect.left,
        //   y: res[1].clientY - rect.top
        // };
      
        // // this method we'll implement soon to do the actual drawing
        // this.drawOnCanvas(prevPos, currentPos);
    });


    // Observable
    // // this will capture all mousedown events from teh canvas element
    // .fromEvent(canvasEl, 'mousedown')
    // .switchMap((e) => {
    //   return Observable
    //     // after a mouse down, we'll record all mouse moves
    //     .fromEvent(canvasEl, 'mousemove')
    //     // we'll stop (and unsubscribe) once the user releases the mouse
    //     // this will trigger a 'mouseup' event    
    //     .takeUntil(Observable.fromEvent(canvasEl, 'mouseup'))
    //     // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
    //     .takeUntil(Observable.fromEvent(canvasEl, 'mouseleave'))
    //     // pairwise lets us get the previous value to draw a line from
    //     // the previous point to the current point    
    //     .pairwise()
    // })






      // this will capture all mousedown events from teh canvas element
      // const mouseMoves = fromEvent(canvasEl, 'mousedown').pipe(
      // switchMap((e) => {
      //   return Observable.pipe(
      //     // after a mouse down, we'll record all mouse moves
      //     fromEvent(canvasEl, 'mousemove'));
      //     // we'll stop (and unsubscribe) once the user releases the mouse
      //     // this will trigger a 'mouseup' event
      //     takeUntil(fromEvent(canvasEl, 'mouseup'));
      //     // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
      //     takeUntil(fromEvent(canvasEl, 'mouseleave'));
      //     // pairwise lets us get the previous value to draw a line from
      //     // the previous point to the current point
      //     // .pairwise();
      //   );
      // }))
      // .subscribe((res: [MouseEvent, MouseEvent]) => {
      //   const rect = canvasEl.getBoundingClientRect();
  
      //   // previous and current position with the offset
      //   const prevPos = {
      //     x: res[0].clientX - rect.left,
      //     y: res[0].clientY - rect.top
      //   };
  
      //   const currentPos = {
      //     x: res[1].clientX - rect.left,
      //     y: res[1].clientY - rect.top
      //   };
      
      //   // this method we'll implement soon to do the actual drawing
      //   this.drawOnCanvas(prevPos, currentPos);
      // });
  }

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number }
  ) {
    // incase the context is not set
    if (!this.cx) { return; }
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


}
