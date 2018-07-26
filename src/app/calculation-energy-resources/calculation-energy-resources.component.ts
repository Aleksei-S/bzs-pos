import { Component, ViewChild, ElementRef, Input, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent, of } from 'rxjs';
import { combineLatest, switchMap, takeUntil, map, pairwise } from 'rxjs/operators';



@Component({
  selector: 'app-calculation-energy-resources',
  templateUrl: './calculation-energy-resources.component.html',
  styleUrls: ['./calculation-energy-resources.component.css']
})
export class CalculationEnergyResourcesComponent implements OnInit {


  

  constructor(public ng: NgZone) { }

  ngOnInit() {


  }

}

  // private cc() {
  //   console.log('this.cx');
  //   // this.cx.clearRect(0,0, this.width, this.height);
  //   var dx = 2;
  //   var dy = 4;
  //   this.cx.beginPath();
  //   this.cx.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
  //   this.cx.closePath();
  //   this.cx.fill();
  //   this.x += dx;
  //   this.y += dy;
  //   // var raf = window.requestAnimationFrame( this.captureEvents(canvasEl));
  // }







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

