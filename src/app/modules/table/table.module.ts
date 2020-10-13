import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { TableRoutingModule } from './table.routing';

import { TableComponent } from './page/table.component';
import { SelectionButtonComponent } from './components/toolbar/selection-button/selection-button.component';
import { SelectedRecordsComponent } from './components/toolbar/selected-records/selected-records.component';
import { TotalRecordsComponent } from './components/toolbar/total-records/total-records.component';
import { CellComponent } from './components/cell/cell.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [TableComponent, SelectionButtonComponent, SelectedRecordsComponent, TotalRecordsComponent, CellComponent, HeaderComponent],
  imports: [
    SharedModule,
    TableRoutingModule,
    AgGridModule.withComponents([
        SelectedRecordsComponent,
        SelectionButtonComponent,
        TotalRecordsComponent,
        CellComponent,
        HeaderComponent
    ])
  ]
})
export class TableModule { }
