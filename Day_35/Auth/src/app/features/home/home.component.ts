import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isAdmin = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const role = localStorage.getItem('userRole');
    this.isAdmin = role === 'Admin' || role === 'ROLE_SUPER ADMIN';
  }

  logout() {
    this.authService.logout();
  }
  goToAdmin() {
    this.router.navigate(['/admin']);
  }
}
