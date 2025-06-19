import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralComponent } from './structural/structural.component';
import { AttributionComponent } from './attribution/attribution.component';
import { CustomComponent } from './custom/custom.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StructuralComponent, AttributionComponent, CustomComponent],
  imports: [CommonModule, SharedModule],
  exports: [StructuralComponent, AttributionComponent, CustomComponent],
})
export class FeaturesModule {}
