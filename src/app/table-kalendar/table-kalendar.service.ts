import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableKalendarService {

  constructor() { }

  getPercentRow(num): number[] {
    switch (num) {
      case 6:
        return [12, 18, 20, 15, 15, 20];
      case 6.5:
        return [10, 15, 15, 13, 12, 15, 20];
      case 7:
        return [10, 15, 15, 13, 12, 15, 20];
      case 7.5:
        return [10, 12, 12, 13, 10, 11, 14, 18];
      case 8:
        return [10, 15, 15, 13, 12, 15, 20];
      case 8.5:
        return [10, 15, 15, 13, 12, 15, 20];
      case 9:
        return [10, 15, 15, 13, 12, 15, 20];
      case 9.5:
        return [10, 15, 15, 13, 12, 15, 20];
      case 10:
        return [10, 15, 15, 13, 12, 15, 20];
      case 10.5:
        return [10, 15, 15, 13, 12, 15, 20];
      case 11:
        return [10, 15, 15, 13, 12, 15, 20];
      case 11.5:
        return [10, 15, 15, 13, 12, 15, 20];
      case 12:
        return [10, 15, 15, 13, 12, 15, 20];

    }
  }




}

