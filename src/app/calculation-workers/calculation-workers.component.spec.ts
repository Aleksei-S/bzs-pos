import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationWorkersComponent } from './calculation-workers.component';

describe('CalculationWorkersComponent', () => {
  let component: CalculationWorkersComponent;
  let fixture: ComponentFixture<CalculationWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
