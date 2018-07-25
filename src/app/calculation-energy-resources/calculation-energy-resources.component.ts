import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
// import {fromEvent} from 'rxjs';
import { fromEvent } from 'rxjs';
import { combineLatest, switchMap, takeUntil, map, pairwise } from 'rxjs/operators';

// import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/takeUntil';
// import { combineLatest, takeUntil } from "rxjs/operators";

export class BALL {
left = 200;
top = 200;
radius = 25;
color = 'red';
draw: any;
clear: any;
}




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


   x = 150;
   y = 150;

  ball: any;

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
    this.cx.beginPath();
    this.cx.arc(200, 200, 10, 0, Math.PI*2, true);
    this.cx.closePath();
    this.cx.fill();

    //  setInterval( this.captureEvents(canvasEl), 10);

    // setInterval(this.captureEvents(), 1000);

    // BALL.prototype.draw =  function() {
    //   console.log('BALL');
    // }


    // BALL.prototype.draw = function (gg) {
    //   console.log('dddddddddddddd');
    //   console.log(this);
    //   console.log(gg);
    //   gg.beginPath();
    //   gg.arc(this.left, this.top, 10, 0, Math.PI*2, true);
    //   gg.closePath();
    //   gg.fill();
    //   // this.cx.arc(this.x, this.y, 10, 0, Math.PI*2, true);
    //   };


    // BALL.prototype.clear = function () {
    //   console.log('dddddddddddddd');
    // };




    // this.captureEvents(canvasEl);
  }



  private cc() {
    console.log('this.cx');
    // this.cx.clearRect(0,0, this.width, this.height);
        var dx = 2;
        var dy = 4;
        this.cx.beginPath();
        this.cx.arc(this.x, this.y, 10, 0, Math.PI*2, true);
        this.cx.closePath();
        this.cx.fill();
        this.x += dx;
        this.y += dy;
        // var raf = window.requestAnimationFrame( this.captureEvents(canvasEl));
  }




  private drawFF() {
   this.fff (150,150)
    // this.cx.beginPath();
    // // this.cx.moveTo(0, 200);
    // //     // this.cx.lineTo(50, 200);
    // //     // this.cx.lineTo(100, 300);
    // //     // this.cx.lineTo(300, 300);
    // //     // this.cx.lineTo(350, 200);
    // //     // this.cx.lineTo(400, 200);
    // this.cx.closePath();
    // // this.cx.fill();


    // // setInterval(() => this.captureEvents() , 500);
  }


fff (x: number, y: number) {
  this.cx.beginPath();
  this.cx.moveTo(x, y);
  this.cx.lineTo(x + 0, y - 20);
  this.cx.lineTo(x + 60, y - 20);
  this.cx.moveTo(x, y);
  this.cx.lineTo(x + 10, y - 10);
  this.cx.moveTo(x, y);
  this.cx.lineTo(x - 10, y - 10);
  
  // this.cx.closePath();
  this.cx.stroke();
}
  
  onclick(e) {
    console.log(e);
    console.log(this);
  }

  save() {
    this.cx.save();
  }
  past() {
    this.cx.restore();
  }






//   private drawFF() {
    
//     let x = 150;
//     let y = 150;
//     let dx = 2;
//     let dy = 4;
//     console.log(this.cx);
//     this.cx.beginPath();
//     this.cx.arc(100, 100, 25, 0, Math.PI * 2, true);
//     this.cx.closePath();
//     this.cx.fill();
//     x += dx;
//     y += dy;
//     // this.cx.fillStyle = 'blue';
//     // this.cx.fill();
//     // console.log(this.canvas);
//     // this.ball.draw();
//   }


//   private captureEvents(canvasEl: HTMLCanvasElement) {
//     // return setInterval(this.drawFF, 10);
//     const mouseS = fromEvent(canvasEl, 'mousedown')
//       .pipe(

//         // let mouseMoves = fromEvent(canvasEl, 'mousemove');

//         switchMap((val) => {

//           return fromEvent(canvasEl, 'mousemove').pipe(

//             // fromEvent(canvasEl, 'mousemove'),
//             takeUntil(fromEvent(canvasEl, 'mouseup')),
//             takeUntil(fromEvent(canvasEl, 'mouseleave')),
//             pairwise(),
//           );
//         }),

//     )
//       .subscribe((res: [MouseEvent, MouseEvent]) => {
//         // console.log(res);
//         const rect = canvasEl.getBoundingClientRect();

//         // previous and current position with the offset
//         const prevPos = {
//           x: res[0].clientX - rect.left,
//           y: res[0].clientY - rect.top
//         };

//         const currentPos = {
//           x: res[1].clientX - rect.left,
//           y: res[1].clientY - rect.top
//         };

//         // this method we'll implement soon to do the actual drawing
//         this.drawOnCanvas(prevPos, currentPos);
//       });

//   }

//   private drawOnCanvas(
//     prevPos: { x: number, y: number },
//     currentPos: { x: number, y: number }
//   ) {
//     // incase the context is not set
//     if (!this.cx) { return; }
//     this.drawLand(2);
//     // start our drawing path
//     this.cx.beginPath();

//     // we're drawing lines so we need a previous position
//     if (prevPos) {
//       // sets the start point
//       this.cx.moveTo(prevPos.x, prevPos.y); // from
//       // draws a line from the start pos until the current position
//       this.cx.lineTo(currentPos.x, currentPos.y);

//       // strokes the current path with the styles we set earlier
//       this.cx.stroke();
//     }
//   }


//   private drawLand(num) {


//     this.cx.moveTo(0, 200);
//     // this.cx.lineTo(50, 200);
//     // this.cx.lineTo(100, 300);
//     // this.cx.lineTo(300, 300);
//     // this.cx.lineTo(350, 200);
//     // this.cx.lineTo(400, 200);

//     this.cx.lineTo(50, 200);
//     this.cx.lineTo(100, 250);
//     this.cx.lineTo(300, 250);
//     this.cx.lineTo(350, 200);
//     this.cx.lineTo(400, 200);
//     this.cx.font = "italic 30px Arial";
//     this.cx.fillText("Hello World",10,50);
//     // гипотенуза
//     // let c = Math.sqrt(num * num + num * num);

// // this.ball.draw();
//     // this.cx.moveTo(0, 200);
//     // this.cx.lineTo(this.width, 200);
//      this.cx.stroke();

//     // this.cx.moveTo(0, 250);
//     // this.cx.lineTo(this.width, 250);
//     // this.cx.stroke();
//   }




//   private eventHz(num) {

//   }

//   private clear() {
//     this.cx.clearRect(0, 0, 300, 300); // clear canvas
//   }

//   // function circle(x,y,r) {
//   //   ctx.beginPath();
//   //   ctx.arc(x, y, r, 0, Math.PI*2, true);
//   //   ctx.closePath();
//   //   ctx.fill();
//   // }
  
//   // function rect(x,y,w,h) {
//   //   ctx.beginPath();
//   //   ctx.rect(x,y,w,h);
//   //   ctx.closePath();
//   //   ctx.fill();
//   // }
  
//   // function clear() {
//   //   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   // }

//   // return setInterval(draw, 10);
//   // function draw() {
//   //   clear();
//   //   circle(x, y, 10);
   
//   //   if (x + dx > WIDTH || x + dx < 0)
//   //     dx = -dx;
//   //   if (y + dy > HEIGHT || y + dy < 0)
//   //     dy = -dy;
   
//   //   x += dx;
//   //   y += dy;
//   // }
  
}
