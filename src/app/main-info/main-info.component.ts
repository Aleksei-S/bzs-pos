import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicInfoService } from '../service/basic-info.service';



@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})


export class MainInfoComponent implements OnInit {

  @ViewChild('kalendar') kalendar;

  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
  }

  changeLastingBuilding(e) {
    const value = e.toString().replace(',', '.');
    this.infoService.lastingBuilding$.next(value);
  }

  changeDateStartBuilding(date) {
    this.infoService.date$.next(date);
  }

  changeTabs($event) {
    console.log($event);
    if ($event.index === 3 || $event.index === 4) {
      this.kalendar.saveTable();
      console.log(this.kalendar.table);
    }

  }

  onClick() {
    console.log(this.kalendar);
  }


}



// <app-edit type="text" [parentMessage]="message" (updateMessage)="editMessage($event, message)"
// (removeMessage)="deleteMessage($event)">
// <p #comment>{{message.message}}</p>
// </app-edit>
// import { Component, OnInit, ViewChild, Input, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';
// @ViewChild('editInput') editInput: ElementRef; // input
//   @Input() parentMessage: any;
//   @Input() canEdit: boolean;
//   @Output() updateMessage: EventEmitter<string> = new EventEmitter<string>();
//   @Output() removeMessage: EventEmitter<string> = new EventEmitter<string>();
//   save(): void {
//     this.updateMessage.emit(this._value);
//   }

