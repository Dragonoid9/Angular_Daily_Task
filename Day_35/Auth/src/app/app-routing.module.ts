import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { authGuard, adminGuard } from './guards/auth.guard';
import { AdminComponent } from './features/admin/admin.component';
import { refreshTokenResolver } from './resolvers/refresh-token.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
    resolve: {
      refreshTokens: refreshTokenResolver, //this is resolver function
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
