import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {
  //const url = state.url;
  //localStorage.setItem('path', url)
  const router = inject(Router);
  const authService = inject(AuthService);
  if (authService.authStatus() === AuthStatus.authenticated) {
    router.navigateByUrl('/dashboard');
    return false;
  }
  //if (authService.authStatus() === AuthStatus.checking) return false;

  //.router.navigateByUrl('/auth/login');
  return true;
};
