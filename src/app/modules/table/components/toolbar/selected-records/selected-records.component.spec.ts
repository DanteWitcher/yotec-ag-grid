import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRecordsComponent } from './selected-records.component';

describe('SelectedRecordsComponent', () => {
  let component: SelectedRecordsComponent;
  let fixture: ComponentFixture<SelectedRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
