import { TestBed, inject } from '@angular/core/testing';

import { CalculationStorehouseService } from './calculation-storehouse.service';

describe('CalculationStorehouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationStorehouseService]
    });
  });

  it('should be created', inject([CalculationStorehouseService], (service: CalculationStorehouseService) => {
    expect(service).toBeTruthy();
  }));
});
