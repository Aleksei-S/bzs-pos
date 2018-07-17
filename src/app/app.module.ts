import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableKalendarComponent } from './table-kalendar/table-kalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableKalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
