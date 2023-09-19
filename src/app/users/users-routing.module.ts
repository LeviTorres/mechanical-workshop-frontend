import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout.component';
import { AddClientPageComponent } from '../clients/pages/add-client-page/add-client-page.component';
import { EditClientPageComponent } from '../clients/pages/edit-client-page/edit-client-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      { path: 'add', component: AddUserPageComponent },
      { path: 'edit', component: EditUserPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
