import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,

 } from '@angular/material';
import { AppComponent } from './app.component';
import { TableKalendarComponent } from './table-kalendar/table-kalendar.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { DateYearMonthComponent } from './main-info/component/date-year-month/date-year-month.component';

@NgModule({
  declarations: [
    AppComponent,
    TableKalendarComponent,
    MainInfoComponent,
    DateYearMonthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
