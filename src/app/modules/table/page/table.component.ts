import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
import 'ag-grid-enterprise';

import { DataService } from 'src/app/core/data.service';
import { IEntity } from 'src/app/core/interfaces/entity.interface';
import { DESCRIPTION, THUMBNAIL, TITLE, PUBLISHED, DEFAULTS, CHECKBOX } from '../options';
import { SelectedRecordsComponent, SelectionButtonComponent, TotalRecordsComponent } from '../components/toolbar';

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
    this.gridOptions = {
      defaultColDef: DEFAULTS,
      rowSelection: 'multiple',
      rowMultiSelectWithClick: true,
      suppressCellSelection: true,
      suppressRowClickSelection: true,
      enableRangeSelection: true,
      getContextMenuItems: (params) => this.getContextMenuItems(params),
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
    this.rowData = this.getData();
  }

  public getData(): Observable<IEntity[]> {
    return this.dataService.getEntities();
  }

  public getContextMenuItems(params: any): any[] {
    const url = params.node.data.title;

    return [
      'copy',
      'copyWithHeaders',
      'separator',
      {
        icon: `<span class="ag-icon ag-icon-linked"></span>`,
        name: 'Open in new tab',
        action: () => {
           window.open(url, '_blank');
        }
      }
    ];
  }
}
