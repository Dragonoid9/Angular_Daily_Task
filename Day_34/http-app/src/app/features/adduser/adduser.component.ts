import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../../services/httpservices.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css',
})
export class AdduserComponent implements OnInit {
  user = {
    name: '',
    email: '',
    username: '',
  };

  updateUserForm = {
    id: null,
    name: '',
    email: '',
    username: '',
  };

  fetchUsers() {
    this.httpService.getUsers().subscribe({
      next: (res: any) => {
        this.users = res;
      },
      error: (err) => console.error('Fetch users error:', err),
    });
  }
  users: any[] = [];
  showUpdateForm = false;
  constructor(private httpService: HttpservicesService) {}
  ngOnInit(): void {
    this.fetchUsers();
  }

  submitForm() {
    this.httpService.addUser(this.user).subscribe({
      next: (response) => {
        console.log('User added successfully:', response);
      },
      error: (err) => {
        console.error('Error adding user:', err);
      },
    });
  }

  submitUpdateForm() {
    if (!this.updateUserForm.id) return;

    this.httpService
      .updateUser(this.updateUserForm.id, this.updateUserForm)
      .subscribe({
        next: (res) => {
          console.log('User updated:', res);
          this.updateUserForm = { id: null, name: '', email: '', username: '' };
        },
        error: (err) => console.error('Update error:', err),
      });
  }
  editUser(user: any) {
    this.updateUserForm = { ...user };
    this.showUpdateForm = true;
  }
  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.httpService.deleteUser(id).subscribe({
        next: () => {
          console.log('User deleted:', id);
          this.fetchUsers();
        },
        error: (err) => console.error('Delete error:', err),
      });
    }
  }
}
