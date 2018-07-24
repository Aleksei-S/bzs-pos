import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTab'
})
export class NumberTabPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(value)) {
      return '-';
    }
    return value.toString().replace('.', ',');
  }

}
