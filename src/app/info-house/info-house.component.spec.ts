import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHouseComponent } from './info-house.component';

describe('InfoHouseComponent', () => {
  let component: InfoHouseComponent;
  let fixture: ComponentFixture<InfoHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
