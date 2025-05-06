import { Component } from '@angular/core';

@Component({
  selector: 'app-attribution',
  templateUrl: './attribution.component.html',
  styleUrl: './attribution.component.css',
})
export class AttributionComponent {
  private isActive: boolean = false;
  public toggleActive(): void {
    this.isActive = !this.isActive;
  }
}
