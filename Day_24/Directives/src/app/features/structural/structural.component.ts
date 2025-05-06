import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrl: './structural.component.css',
})
export class StructuralComponent {
  private a: number = 200;
  private b: number = 400;

  private items: number[] = [40, 30, 20, 60];

  private item: string = 'first';
}
