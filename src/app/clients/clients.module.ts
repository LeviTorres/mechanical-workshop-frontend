import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AddClientPageComponent } from './pages/add-client-page/add-client-page.component';
import { EditClientPageComponent } from './pages/edit-client-page/edit-client-page.component';
import { ClientPageComponent } from './pages/client-page/client-page.component';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClientLayoutComponent,
    AddClientPageComponent,
    EditClientPageComponent,
    ClientPageComponent,
  ],
  imports: [CommonModule, ClientsRoutingModule, SidebarModule, SharedModule],
})
export class ClientsModule {}
