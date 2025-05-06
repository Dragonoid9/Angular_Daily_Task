import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttptestComponent } from './httptest/httptest.component';
import { HttpservicesService } from '../services/httpservices.service';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HttptestComponent, AdduserComponent],
  imports: [CommonModule, FormsModule],
  providers: [HttpservicesService],
  exports: [HttptestComponent, AdduserComponent],
})
export class FeaturesModule {}
