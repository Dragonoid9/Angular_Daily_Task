import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttptestComponent } from './features/httptest/httptest.component';
import { AdduserComponent } from './features/adduser/adduser.component';

const routes: Routes = [
  {
    path: 'test',
    component: HttptestComponent,
  },
  {
    path: 'addUser',
    component: AdduserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
