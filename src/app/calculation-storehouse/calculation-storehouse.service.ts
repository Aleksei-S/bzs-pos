import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RESOURCE {
  electric: number;
  oil: number;
  vapor: number;
  compresAir: number;
  waterHouse: number;
  oxyden: number;
  constructor(electric = 0, oil = 0, vapor = 0, compresAir = 0, waterHouse = 0, oxyden = 0) {
    this.electric = electric;
    this.oil = oil;
    this.vapor = vapor;
    this.compresAir = compresAir;
    this.waterHouse = waterHouse;
    this.oxyden = oxyden;
  }
}


export class CalculationStorehouseService {

  constructor() { }

  getResourceCoef(summa, coef) {
    const summaPlusCoef = summa / (2.7 * 1267 * coef);
    if (summaPlusCoef < 0.50) {   // до 0,5
      return new RESOURCE(205, 97, 200, 3.9, 0.3, 4400);
    } else if (0.5 < summaPlusCoef && summaPlusCoef < 1.01) {  // до 1
      return new RESOURCE(185, 69, 185, 3.2, 0.23, 4400);
    } else if (1.0 < summaPlusCoef && summaPlusCoef < 1.51) { // до 1,5
      return new RESOURCE(140, 52, 160, 3.2, 0.2, 4400);
    } else if (1.5 < summaPlusCoef && summaPlusCoef < 2.01) { // до 2
      return new RESOURCE(100, 44, 140, 2.6, 0.16, 4400);
    } else if (2.5 < summaPlusCoef && summaPlusCoef < 3.1) { // до 2,5
      return new RESOURCE(70, 40, 130, 2.6, 0.16, 4400);
    } else { // до 3 (3.0 < summaPlusCoef)
      return new RESOURCE(70, 40, 120, 2.3, 0.16, 4400);
    }
  }


}
