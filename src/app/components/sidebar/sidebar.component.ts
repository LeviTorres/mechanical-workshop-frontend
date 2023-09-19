import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public menuItems: any[] = [
    {
      name: 'Dashboard',
      url: '/dashboard',
    },
    {
      name: 'Usuarios',
      url: '/users',
    },
    {
      name: 'Clientes',
      url: '/clients',
    },
    {
      name: 'Proveedores',
      url: '/providers',
    },
    {
      name: 'Servicios',
      url: '/jobs',
    },
  ];

  private authService = inject(AuthService);

  get user() {
    return this.authService.currentUser();
  }

  public onLogout() {
    this.authService.logout();
  }
}
