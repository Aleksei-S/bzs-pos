import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatIconModule} from '@angular/material/icon';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatAutocompleteModule,
  MatExpansionModule,

 } from '@angular/material';
import { AppComponent } from './app.component';
import { TableKalendarComponent } from './table-kalendar/table-kalendar.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { DateYearMonthComponent } from './main-info/component/date-year-month/date-year-month.component';
import { EditCellTableComponent } from './component/edit-cell-table/edit-cell-table.component';
import { YearsColdspanPipe } from './pipe/years-coldspan.pipe';
import { ValueTablePipe } from './component/edit-cell-table/edit-cell-table.component';
import { CalculationWorkersComponent } from './calculation-workers/calculation-workers.component';

import { CalculationStorehouseComponent } from './calculation-storehouse/calculation-storehouse.component';
import { NumberTabPipe } from './pipe/number-tab.pipe';

import { KonvaModule } from 'ng2-konva';
import { InfoHouseComponent } from './info-house/info-house.component';
import { EditCellStringComponent } from './component/edit-cell-string/edit-cell-string.component';

@NgModule({
  declarations: [
    AppComponent,
    TableKalendarComponent,
    MainInfoComponent,
    DateYearMonthComponent,
    EditCellTableComponent,
    YearsColdspanPipe,
    ValueTablePipe,
    CalculationWorkersComponent,
    CalculationStorehouseComponent,
    NumberTabPipe,
    InfoHouseComponent,
    EditCellStringComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    KonvaModule,


    MatExpansionModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
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
