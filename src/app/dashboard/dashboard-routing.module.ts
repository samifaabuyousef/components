import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'brand',  loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule), data: {breadcrumb: 'brands'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
