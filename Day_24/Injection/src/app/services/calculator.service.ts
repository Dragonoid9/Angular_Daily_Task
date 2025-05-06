import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  public add(x: number, y: number): number {
    return x + y;
  }
}
