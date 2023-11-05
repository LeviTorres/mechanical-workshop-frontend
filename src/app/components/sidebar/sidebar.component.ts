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
      icon: 'bi bi-house-door-fill',
    },
    {
      name: 'Usuarios',
      url: '/users',
      icon: 'bi bi-people-fill',
    },
    {
      name: 'Clientes',
      url: '/clients',
      icon: 'bi bi-people-fill',
    },
    {
      name: 'Proveedores',
      url: '/providers',
      icon: 'bi bi-people-fill',
    },
    {
      name: 'Servicios',
      url: '/jobs',
      icon: 'bi bi-car-front-fill',
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
