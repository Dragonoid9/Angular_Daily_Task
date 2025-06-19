import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, AdminComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent, HomeComponent],
})
export class FeaturesModule {}
