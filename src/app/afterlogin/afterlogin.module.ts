import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterloginRoutingModule } from './afterlogin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainChartComponent } from './main-chart/main-chart.component';

@NgModule({
  imports: [
    CommonModule,
    AfterloginRoutingModule
  ],
  declarations: [NavbarComponent, DashboardComponent, MainChartComponent]
})
export class AfterloginModule { }
