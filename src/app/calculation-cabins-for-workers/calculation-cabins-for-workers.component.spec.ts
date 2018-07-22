import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationCabinsForWorkersComponent } from './calculation-cabins-for-workers.component';

describe('CalculationCabinsForWorkersComponent', () => {
  let component: CalculationCabinsForWorkersComponent;
  let fixture: ComponentFixture<CalculationCabinsForWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationCabinsForWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationCabinsForWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
