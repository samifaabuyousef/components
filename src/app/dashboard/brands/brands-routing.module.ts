import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirtyCheckGuard } from 'src/app/core/guards/dirty-check.guard';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { BrandResolver } from './brand.resolver';
import { BrandsListComponent } from './brands-list/brands-list.component';

const routes: Routes = [

    {path: '', component: BrandsListComponent},
    {path: 'new', component: AddEditBrandComponent, data: {breadcrumb: 'new brand'}},
    {
      path: 'edit/:id',
      component: AddEditBrandComponent,
      resolve: {brand: BrandResolver},
      data: {breadcrumb: 'edit'}
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandsRoutingModule { }
