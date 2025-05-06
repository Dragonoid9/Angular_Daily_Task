import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrl: './sum.component.css',
})
export class SumComponent {
  private totalCost: number;

  constructor(private calculator: CalculatorService) {
    this.totalCost = this.calculator.add(50, 25);
  }
}
