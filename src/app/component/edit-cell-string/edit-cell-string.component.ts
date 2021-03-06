import { Component, OnInit, Pipe, PipeTransform, ViewChild, Input, Renderer2, ElementRef, Output, EventEmitter  } from '@angular/core';


// @Pipe({
//   name: 'valueTable'
// })
// export class ValueTablePipe implements PipeTransform {

//   transform(value, args: string[]): any {
//     // console.log(value);
//     if (+value === 0) {
//       return '-';
//     }
//     value = value.toString().replace('.', ',');
//     return value;
//   }

// }
@Component({
  selector: 'app-edit-cell-string',
  templateUrl: './edit-cell-string.component.html',
  styleUrls: ['./edit-cell-string.component.css']
})
export class EditCellStringComponent implements OnInit {
  @ViewChild('editInput') editInput: ElementRef;
  @Input() value: any;
  @Output() updateValue: EventEmitter<any> = new EventEmitter<any>();

  editing = false;
  constructor(element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // console.log(this.value);
  }

  changeVal(e) {
    let value = 0;
    if (e.target.value === '' ) {
      value = 0;
    } else {
      value = e.target.value.toString().replace(',', '.');
    }
    this.updateValue.emit(value);
  }

  clickOn() {
    this.editing = true;
    setTimeout(() => {
      if (this.value === 0 ) {
        this.editInput.nativeElement.value = '';
      } else {
        this.editInput.nativeElement.value = this.value;
      }
      this.editInput.nativeElement.focus();
    }, 0);
  }

  onBlur(): void {
    this.editing = false;
  }

}
