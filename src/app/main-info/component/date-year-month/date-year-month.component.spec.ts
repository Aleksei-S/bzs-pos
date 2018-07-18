import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateYearMonthComponent } from './date-year-month.component';

describe('DateYearMonthComponent', () => {
  let component: DateYearMonthComponent;
  let fixture: ComponentFixture<DateYearMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateYearMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateYearMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
