import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');
  const role = localStorage.getItem('userRole');

  if (!token) {
    return router.parseUrl('/login'); // Return UrlTree for redirect
  }

  return true;
};

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');
  const role = localStorage.getItem('userRole');

  if (!token) {
    return router.parseUrl('/login');
  }

  if (role === 'Admin' || role === 'ROLE_SUPER ADMIN') {
    return true; // allow admin access
  } else {
    return router.parseUrl('/'); // redirect to home if not admin
  }
};
