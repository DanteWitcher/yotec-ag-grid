import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedRecordsComponent, SelectionButtonComponent, TotalRecordsComponent } from './components/toolbar';
import { TableComponent } from './page/table.component';

export const routes: Routes = [
    {
        path: '',
        component: TableComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TableRoutingModule { }
