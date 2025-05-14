import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl, { username, password });
  }

  storeTokens(data: any) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('userRole', data.role);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getAllRefreshTokens() {
    return this.http.get<any>(
      'http://localhost:8080/api/v1/auth/getAllRefreshToken'
    );
  }
}
