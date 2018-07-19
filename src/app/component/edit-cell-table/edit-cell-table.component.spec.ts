import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCellTableComponent } from './edit-cell-table.component';

describe('EditCellTableComponent', () => {
  let component: EditCellTableComponent;
  let fixture: ComponentFixture<EditCellTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCellTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCellTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
