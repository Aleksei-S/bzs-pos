import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableKalendarService {

  constructor() { }

  getPercentRow(num): number[] {
    return new Percent()[num];
  }

}


export class Percent {
  6 = [12, 18, 20, 15, 15, 20];
  6.5 = [10, 15, 15, 13, 12, 15, 20];
  7 = [10, 15, 15, 13, 12, 15, 20];
  7.5 = [10, 12, 12, 13, 10, 11, 14, 18];
}
