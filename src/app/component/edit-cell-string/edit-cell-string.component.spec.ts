import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellStringComponent } from './edit-cell-string.component';

describe('EditCellStringComponent', () => {
  let component: EditCellStringComponent;
  let fixture: ComponentFixture<EditCellStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCellStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCellStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
