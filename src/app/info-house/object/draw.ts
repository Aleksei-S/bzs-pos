import { BehaviorSubject, Observable, of } from 'rxjs';
declare const Konva: any;

export class DrawLAND {
  x: number;
  y: number;
  h: number;
  coef: any;
  landLevel: any;
  downPit: any;
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.landLevel = y * 0.4;
    this.h = h;
    this.landLevel = y * 0.4;
    this.downPit = this.landLevel + h * this.coef;
    const redLine = new Konva.Line({
      points: [
        0, this.landLevel,
        x * 0.15, this.landLevel,
        x * 0.15 + (h * 0.6 * this.coef), this.downPit,
        x * 0.75 - (h * 0.6 * this.coef), this.downPit,
        x * 0.75, this.landLevel,
        x, this.landLevel
      ],
    });
  }

  //   this.lineLand = of({
  //     points: [
  //       0, this.landLevel,
  //       x * 0.15, this.landLevel,
  //       x * 0.15 + (h * 0.6 * this.coef), this.downPit,
  //       x * 0.75 - (h * 0.6 * this.coef), this.downPit,
  //       x * 0.75, this.landLevel,
  //       x, this.landLevel
  //     ],
  //     stroke: 'black',
  //     strokeWidth: 4,
  //     lineJoin: 'round'
  //   });
  // var redLine = new Konva.Line({
  //   points: [5, 70, 140, 23, 250, 60, 300, 20],
  //   stroke: 'red',
  //   strokeWidth: 15,
  //   lineCap: 'round',
  //   lineJoin: 'round',
  //   tension : 1
  // });



}



export class DrawARROWo {
  arrowGroup: any;
  arrow: any;
  arrowEnd: any;
  text: any;

  otm: string;
  direction: number;
  directionValuer = [0, 1, 2, 3];

  constructor(moveX = 200, moveY = 200, direction = 0, otm = '0.000') {
    this.direction = direction;
    this.otm = otm;
    this.arrow = {
      x: 0,
      y: 0,
      points: (direction === 1) ? [0, 0, 0, -23, 70, -23] : //top rigt  1
        (direction === 2) ? [0, 0, 0, -23, -70, -23] : //top left  2
          (direction === 3) ? [0, 0, 0, 23, -70, 23] : //botttom left 3
            [0, 0, 0, 23, 70, 23], //botttom rigt
      stroke: 'black',
      strokeWidth: 1,
      lineJoin: 'round'
    };
    this.arrowEnd = {
      x: 0,
      y: 0,
      points: (direction === 1 || direction === 2) ? [-10, -10, 0, 0, 10, -10] : //top
        [-10, 10, 0, 0, 10, 10], //botttom
      stroke: 'black',
      strokeWidth: 4,
      lineJoin: 'round'
    };

    const obj = {
      x: 0,
      y: 0
    };

    if (direction === 1) {
      obj.x = 15; obj.y = -45; //top rigt  1
    } else if (direction === 2) {
      obj.x = -60; obj.y = -45; ////top left  2
    } else if (direction === 3) {
      obj.x = -60; obj.y = 0; //botttom left 3
    } else {
      obj.x = 15; obj.y = 0; //botttom rigt
    }
    this.text = {
      x: obj.x,
      y: obj.y,
      text: this.otm,
      fontSize: 20,
      draggable: true,
      fontFamily: 'Calibri',
      fill: 'green'
    };


    this.arrowGroup = of({
      x: moveX,
      y: moveY,
      draggable: true
    });
  }

}


export class DrawARROW {
  arrowGroup: any;
  arrow: any;
  arrowEnd: any;
  text: any;

  otm: string;
  direction: number;
  directionValuer = [0, 1, 2, 3];

  constructor(moveX = 200, moveY = 200, direction = 0, otm = '0.000') {
    this.direction = direction;
    this.otm = otm;
    this.arrow = of({
      x: 0,
      y: 0,
      points: (direction === 1) ? [0, 0, 0, -23, 70, -23] : //top rigt  1
        (direction === 2) ? [0, 0, 0, -23, -70, -23] : //top left  2
          (direction === 3) ? [0, 0, 0, 23, -70, 23] : //botttom left 3
            [0, 0, 0, 23, 70, 23], //botttom rigt
      stroke: 'black',
      strokeWidth: 1,
      lineJoin: 'round'
    });
    this.arrowEnd = of({
      x: 0,
      y: 0,
      points: (direction === 1 || direction === 2) ? [-10, -10, 0, 0, 10, -10] : //top
        [-10, 10, 0, 0, 10, 10], //botttom
      stroke: 'black',
      strokeWidth: 4,
      lineJoin: 'round'
    });

    const obj = {
      x: 0,
      y: 0
    };

    if (direction === 1) {
      obj.x = 15; obj.y = -45; //top rigt  1
    } else if (direction === 2) {
      obj.x = -60; obj.y = -45; ////top left  2
    } else if (direction === 3) {
      obj.x = -60; obj.y = 0; //botttom left 3
    } else {
      obj.x = 15; obj.y = 0; //botttom rigt
    }
    this.text = of({
      x: obj.x,
      y: obj.y,
      text: this.otm,
      fontSize: 20,
      draggable: true,
      fontFamily: 'Calibri',
      fill: 'green'
    });


    this.arrowGroup = of({
      x: moveX,
      y: moveY,
      draggable: true
    });
  }

}




// export class DrawLAND {
//   x: number;
//   y: number;
//   h: number;
//   lineLand: any;
//   demension: any;
//   waterLevel: any;
//   arrowList = [];

//   textDemension: any;
//   textWaterLevel: any;
//   coef = 35;
//   landLevel = this.y * 0.4;
//   downPit = this.landLevel + this.h * this.coef;
//   waterLvl: any;


//   drawArrow() {
//     const dd = this.landLevel + 2 * this.coef;
//     this.arrowList.push(new DrawARROW(this.x / 2 , dd + 3, 0, 'GGG'));
//   }

//   drawWater() {
//     this.waterLevel = of({
//       points: [
//         0, this.waterLvl,
//         this.x, this.waterLvl
//       ],
//       stroke: 'blue',
//       strokeWidth: 2,
//       dash: [33, 15],
//       lineJoin: 'round'
//     });
//   }

//   // constructor(x, y, h = 0, waterLevel = 0) {
//   //   this.x = x;
//   //   this.y = y;
//   //   this.h = h;
//   //   this.landLevel = y * 0.4;
//   //   this.downPit = this.landLevel + h * this.coef;
//   //   this.waterLvl = this.landLevel + 3 * this.coef;
//   //   const pozitionDemension = x * 0.85;
//   //   this.lineLand = of({
//   //     points: [
//   //       0, this.landLevel,
//   //       x * 0.15, this.landLevel,
//   //       x * 0.15 + (h * 0.6 * this.coef), this.downPit,
//   //       x * 0.75 - (h * 0.6 * this.coef), this.downPit,
//   //       x * 0.75, this.landLevel,
//   //       x, this.landLevel
//   //     ],
//   //     stroke: 'black',
//   //     strokeWidth: 4,
//   //     lineJoin: 'round'
//   //   });

//   //   // if (true) {
      
//   //   // }

//   //   // this.demension = of({
//   //   //   points: [
//   //   //     pozitionDemension, landLevel,
//   //   //     pozitionDemension - 5, landLevel - 5,
//   //   //     pozitionDemension + 5, landLevel + 5,
//   //   //     pozitionDemension, landLevel,
//   //   //     pozitionDemension, this.downPit,
//   //   //     pozitionDemension - 5, this.downPit - 5,
//   //   //     pozitionDemension + 5, this.downPit + 5,
//   //   //     pozitionDemension, this.downPit,
//   //   //     pozitionDemension  + 7, this.downPit,
//   //   //     pozitionDemension - 30, this.downPit,
//   //   //   ],
//   //   //   stroke: 'green',
//   //   //   strokeWidth: 1,
//   //   //   lineJoin: 'round'
//   //   // });

//   //   // this.textDemension = of({
//   //   //   x: pozitionDemension - 20,
//   //   //   y: this.downPit - 15,
//   //   //   text: h.toFixed(1) + 'м',
//   //   //   fontSize: 20,
//   //   //   rotation: 270,
//   //   //   draggable: true,
//   //   //   fontFamily: 'Calibri',
//   //   //   fill: 'green'
//   //   // });


//   //   // this.waterLevel = of({
//   //   //   points: [
//   //   //     0, waterLvl,
//   //   //     x, waterLvl
//   //   //   ],
//   //   //   stroke: 'blue',
//   //   //   strokeWidth: 2,
//   //   //   dash: [33, 15],
//   //   //   lineJoin: 'round'
//   //   // });

//   //   // this.arrowList = new DrawARROW(1, 'FFFFFFFF');

//   //   // this.water.push(
//   //   //   new DrawARROW(x / 2 , downPit + 3, 0, 'FFFFFFFF'),
//   //   //   new DrawARROW(pozitionDemension - 25, landLevel, 1, 'FFFFFFFF'),
//   //   //   new DrawARROW(x / 8, waterLvl + 3, 0, 'FFFFFFFF'),
//   //   // );


//   //   // this.arrowList.push(
//   //   //   new DrawARROW(x / 2 , downPit + 3, 0, 'FFFFFFFF'),
//   //   //   new DrawARROW(pozitionDemension - 25, landLevel, 1, 'FFFFFFFF'),
//   //   //   new DrawARROW(x / 8, waterLvl + 3, 0, 'FFFFFFFF'),
//   //   // );

//   // }

// }




// export class DrawARROW {
//   arrowGroup: any;
//   arrow: any;
//   arrowEnd: any;
//   text: any;

//   otm: string;
//   direction: number;
//   directionValuer = [0, 1, 2, 3];

//   constructor(moveX = 200, moveY = 200, direction = 0, otm = '0.000') {
//     this.direction = direction;
//     this.otm = otm;
//     this.arrow = of({
//       x: 0,
//       y: 0,
//       points: (direction === 1) ? [0, 0, 0, -23, 70, -23] : //top rigt  1
//         (direction === 2) ? [0, 0, 0, -23, -70, -23] : //top left  2
//           (direction === 3) ? [0, 0, 0, 23, -70, 23] : //botttom left 3
//             [0, 0, 0, 23, 70, 23], //botttom rigt
//       stroke: 'black',
//       strokeWidth: 1,
//       lineJoin: 'round'
//     });
//     this.arrowEnd = of({
//       x: 0,
//       y: 0,
//       points: (direction === 1 || direction === 2) ? [-10, -10, 0, 0, 10, -10] : //top
//         [-10, 10, 0, 0, 10, 10], //botttom
//       stroke: 'black',
//       strokeWidth: 4,
//       lineJoin: 'round'
//     });

//     const obj = {
//       x: 0,
//       y: 0
//     };

//     if (direction === 1) {
//       obj.x = 15; obj.y = -45; //top rigt  1
//     } else if (direction === 2) {
//       obj.x = -60; obj.y = -45; ////top left  2
//     } else if (direction === 3) {
//       obj.x = -60; obj.y = 0; //botttom left 3
//     } else {
//       obj.x = 15; obj.y = 0; //botttom rigt
//     }
//     this.text = of({
//       x: obj.x,
//       y: obj.y,
//       text: this.otm,
//       fontSize: 20,
//       draggable: true,
//       fontFamily: 'Calibri',
//       fill: 'green'
//     });


//     this.arrowGroup = of({
//       x: moveX,
//       y: moveY,
//       draggable: true
//     });
//   }

// }
