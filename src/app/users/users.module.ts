import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutComponent } from './layouts/users-layout/users-layout.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AddUserPageComponent } from './pages/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    UsersLayoutComponent,
    UsersPageComponent,
    AddUserPageComponent,
    EditUserPageComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule, SidebarModule],
})
export class UsersModule {}
