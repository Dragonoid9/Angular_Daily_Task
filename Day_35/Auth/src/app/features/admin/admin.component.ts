import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  refreshTokens: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.refreshTokens = this.route.snapshot.data['refreshTokens']?.data || [];
    console.log('Resolved Refresh Tokens:', this.refreshTokens);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
