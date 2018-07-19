import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsColdspan'

})
export class YearsColdspanPipe implements PipeTransform {

  transform(value, args: string[]): any {
    if (value.length === 0) {
      return [];
    }
    const keys = [];
    let year = value[0].slice(-4);
    let coldspan = 0;
    value.forEach((month) => {
      if (year !== month.slice(-4)) {
        const aa = coldspan;

        keys.push({year: year, coldspan: aa});
        year = month.slice(-4);
        coldspan = 1;
      } else {
        coldspan = coldspan + 1;
      }
    });
    keys.push({year: year, coldspan: coldspan});
    return keys;
  }

}
// @Pipe({name: 'yearsColdspan',
// pure: false})
// export class YearsColdspanPipe implements PipeTransform {
//   transform(value, args: string[]): any {
//     if (value.length === 0) {
//       return [];
//     }
//     const keys = [];
//     let year = value[0].slice(-4);
//     let coldspan = 0;
//     value.forEach((month) => {
//       if (year !== month.slice(-4)) {
//         const aa = coldspan;

//         keys.push({year: year, coldspan: aa});
//         year = month.slice(-4);
//         coldspan = 1;
//       } else {
//         coldspan = coldspan + 1;
//       }
//     });
//     keys.push({year: year, coldspan: coldspan});
//     return keys;
//   }
// }