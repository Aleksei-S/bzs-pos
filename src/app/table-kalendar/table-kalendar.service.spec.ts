import { TestBed, inject } from '@angular/core/testing';

import { TableKalendarService } from './table-kalendar.service';

describe('TableKalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableKalendarService]
    });
  });

  it('should be created', inject([TableKalendarService], (service: TableKalendarService) => {
    expect(service).toBeTruthy();
  }));
});
