import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableKalendarComponent } from './table-kalendar.component';

describe('TableKalendarComponent', () => {
  let component: TableKalendarComponent;
  let fixture: ComponentFixture<TableKalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableKalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableKalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
