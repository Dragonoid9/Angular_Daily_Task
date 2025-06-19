import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css',
})
export class BuiltInPipesComponent {
  today: Date = new Date();
  text: string = 'Re-Define the world!!';
}
