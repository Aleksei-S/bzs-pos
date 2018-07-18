import { Component, OnInit } from '@angular/core';
import { BasicInfoService } from '../service/basic-info.service';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  constructor(private infoService: BasicInfoService) { }

  ngOnInit() {
  }

  changeLastingBuilding(e) {
    this.infoService.lastingBuilding$.next(e);
  }

  changeDateStartBuilding(date) {
    this.infoService.date$.next(date);
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

