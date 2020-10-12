import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/table',
        pathMatch: 'full',
    },
    {
        path: 'table',
        component: ContentLayoutComponent,
        loadChildren: () => import('./modules/table/table.module').then(m => m.TableModule)
    },
    {
        path: '**',
        redirectTo: '/table',
        pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
