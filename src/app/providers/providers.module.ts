import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';
import { ProvidersPageComponent } from './pages/providers-page/providers-page.component';
import { AddProviderPageComponent } from './pages/add-provider-page/add-provider-page.component';
import { EditProviderPageComponent } from './pages/edit-provider-page/edit-provider-page.component';
import { SharedModule } from '../shared/shared.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    ProviderLayoutComponent,
    ProvidersPageComponent,
    AddProviderPageComponent,
    EditProviderPageComponent,
  ],
  imports: [CommonModule, ProvidersRoutingModule, SharedModule, SidebarModule],
})
export class ProvidersModule {}
