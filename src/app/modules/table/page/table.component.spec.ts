import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { CoreModule } from '../../../core/core.module';
import { DataService } from '../../../core/data.service';

import { TableComponent } from './table.component';
import { SelectedRecordsComponent, SelectionButtonComponent, TotalRecordsComponent } from '../components/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { of } from 'rxjs';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            SharedModule,
            CoreModule,
            AgGridModule.withComponents([
                TableComponent,
                SelectedRecordsComponent,
                SelectionButtonComponent,
                TotalRecordsComponent,
            ])
        ],
        declarations: [
            TableComponent,
            SelectedRecordsComponent,
            SelectionButtonComponent,
            TotalRecordsComponent,
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const result = [
        {
            videoId: 'wFw3C-YIq7M&t=1785s',
            thumbnails: 'hz',
            publishedAt: 'Oct 22, 2020',
            title: 'https://www.youtube.com/watch?v=wFw3C-YIq7M&t=1785s',
            description: 'Markaplier'
          },
          {
            videoId: 'GyAAwCu-Lu4',
            thumbnails: 'hz',
            publishedAt: 'Jul 22, 2013',
            title: 'https://www.youtube.com/watch?v=GyAAwCu-Lu4',
            description: 'Limp Bizkit - Ready To Go ft. Lil Wayne'
          },
    ];

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    spyOn(component, 'getData');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('grid API is available', () => {
    expect(component.gridOptions.api).toBeTruthy();
  });

  it('column API is available', () => {
    expect(component.gridOptions.columnApi).toBeTruthy();
  });
});
