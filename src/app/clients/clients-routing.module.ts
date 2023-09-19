import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import { EditClientPageComponent } from './pages/edit-client-page/edit-client-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: 'add', component: AddClientPageComponent },
      { path: 'edit', component: EditClientPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
