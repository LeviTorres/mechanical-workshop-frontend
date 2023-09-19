import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobLayoutComponent } from './layouts/job-layout/job-layout.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { AddJobPageComponent } from './pages/add-job-page/add-job-page.component';
import { EditJobPageComponent } from './pages/edit-job-page/edit-job-page.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    JobLayoutComponent,
    JobsPageComponent,
    AddJobPageComponent,
    EditJobPageComponent,
  ],
  imports: [CommonModule, JobsRoutingModule, SharedModule, SidebarModule],
})
export class JobsModule {}
