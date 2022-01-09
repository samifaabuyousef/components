import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material';
import { TestComponent } from './test/test.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent, TestComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ]
})
export class DashboardModule { }
