import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationEnergyResourcesComponent } from './calculation-energy-resources.component';

describe('CalculationEnergyResourcesComponent', () => {
  let component: CalculationEnergyResourcesComponent;
  let fixture: ComponentFixture<CalculationEnergyResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationEnergyResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationEnergyResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
