import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

// Define resolver function (not a class)
export const refreshTokenResolver: ResolveFn<any> = (
  route,
  state
): Observable<any> => {
  const authService = inject(AuthService);
  return authService.getAllRefreshTokens();
};
