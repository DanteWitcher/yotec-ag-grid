import { Component, OnInit } from '@angular/core';
import { GridOptions } from '@ag-grid-community/core';
import { AllModules } from '@ag-grid-enterprise/all-modules';
import { DataService } from 'src/app/core/data.service';
import { IEntity } from 'src/app/core/interfaces/entity.interface';
import { Observable } from 'rxjs';
import { DESCRIPTION, THUMBNAIL, TITLE, PUBLISHED, DEFAULTS } from '../options';
import { SelectedRecordsComponent, SelectionButtonComponent, TotalRecordsComponent } from '../components/toolbar';
import { CHECKBOX } from '../options/column-defs/checkbox';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public params: any;
  public modules: any;
  public frameworkComponents: {};
  public statusBar: {};
  public gridOptions: GridOptions;
  public rowData: Observable<IEntity[]>;
  public columnDefs: any[];

  constructor(private dataService: DataService) {
    this.modules = AllModules;
    this.gridOptions = {
      defaultColDef: DEFAULTS,
      rowSelection: 'multiple',
      rowMultiSelectWithClick: true,
      suppressCellSelection: true,
      suppressRowClickSelection: true,
      enableRangeSelection: true,
    };
    this.frameworkComponents = {
      selectionButtonComponent: SelectionButtonComponent,
      selectedRecordsComponent: SelectedRecordsComponent,
      totalRecordsComponent: TotalRecordsComponent
    };
    this.statusBar = {
      statusPanels: [{
          statusPanel: 'selectionButtonComponent',
        },
        {
          statusPanel: 'selectedRecordsComponent',
        },
        {
          statusPanel: 'totalRecordsComponent',
        }
      ]
    };
    this.columnDefs = [
        CHECKBOX,
        THUMBNAIL,
        DESCRIPTION,
        TITLE,
        PUBLISHED,
    ];
  }

  public ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.rowData = this.dataService.getEntities();
  }
}
