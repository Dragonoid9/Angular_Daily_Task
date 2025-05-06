import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpservicesService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  addUser(body: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', body);
  }
  updateUser(id: number, body: any) {
    return this.http.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      body
    );
  }
  deleteUser(id: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
