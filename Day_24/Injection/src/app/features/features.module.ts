import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorService } from '../services/calculator.service';
import { SumComponent } from './sum/sum.component';

@NgModule({
  declarations: [SumComponent],
  imports: [CommonModule],
  providers: [CalculatorService],
  exports: [SumComponent],
})
export class FeaturesModule {}
