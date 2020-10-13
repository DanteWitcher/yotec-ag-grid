import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableComponent } from '../../../page/table.component';

import { TotalRecordsComponent } from './total-records.component';

describe('TotalRecordsComponent', () => {
  let component: TotalRecordsComponent;
  let fixture: ComponentFixture<TotalRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AgGridModule.withComponents([
            TableComponent,
            TotalRecordsComponent,
        ])
      ],
      declarations: [ TotalRecordsComponent, TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRecordsComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getCount').and.returnValue(5);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
