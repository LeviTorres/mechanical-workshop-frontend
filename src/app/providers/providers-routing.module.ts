import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';
import { AddProviderPageComponent } from './pages/add-provider-page/add-provider-page.component';
import { EditProviderPageComponent } from './pages/edit-provider-page/edit-provider-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderLayoutComponent,
    children: [
      { path: 'add', component: AddProviderPageComponent },
      { path: 'edit', component: EditProviderPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidersRoutingModule {}
