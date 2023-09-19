import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobLayoutComponent } from './layouts/job-layout/job-layout.component';
import { AddJobPageComponent } from './pages/add-job-page/add-job-page.component';
import { EditJobPageComponent } from './pages/edit-job-page/edit-job-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobLayoutComponent,
    children: [
      { path: 'add', component: AddJobPageComponent },
      { path: 'edit', component: EditJobPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsRoutingModule {}
