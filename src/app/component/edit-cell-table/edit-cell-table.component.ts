import { Component, OnInit, ViewChild, Input, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-cell-table',
  templateUrl: './edit-cell-table.component.html',
  styleUrls: ['./edit-cell-table.component.css']
})
export class EditCellTableComponent implements OnInit {
  @ViewChild('editInput') editInput: ElementRef;
  @Input() value: any;
  @Output() updateValue: EventEmitter<any> = new EventEmitter<any>();

  editing = false;
  constructor(element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // console.log(this.value);
  }

  changeVal(e) {
    this.updateValue.emit(e.target.value);
  }
  clickOn() {
    this.editing = true;
    setTimeout(() => {
      this.editInput.nativeElement.value = this.value;
      this.editInput.nativeElement.focus();
    }, 0);
  }

  onBlur(): void {
    this.editing = false;
  }
}
