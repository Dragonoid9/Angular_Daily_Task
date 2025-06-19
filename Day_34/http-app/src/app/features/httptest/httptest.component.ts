import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../../services/httpservices.service';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrl: './httptest.component.css',
})
export class HttptestComponent implements OnInit {
  users: any[] = [];

  constructor(private httpService: HttpservicesService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.httpService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
}
