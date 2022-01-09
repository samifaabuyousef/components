import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { AddEditBrandComponent } from './add-edit-brand/add-edit-brand.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BrandsListComponent, AddEditBrandComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SharedModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BrandsModule { }
