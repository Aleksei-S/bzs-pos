import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationStorehouseComponent } from './calculation-storehouse.component';

describe('CalculationStorehouseComponent', () => {
  let component: CalculationStorehouseComponent;
  let fixture: ComponentFixture<CalculationStorehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationStorehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationStorehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
