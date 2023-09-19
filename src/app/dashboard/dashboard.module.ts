import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, SidebarModule],
})
export class DashboardModule {}
