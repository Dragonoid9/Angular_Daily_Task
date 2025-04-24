import { Component } from '@angular/core';

@Component({
  selector: 'app-interpo',
  templateUrl: './interpo.component.html',
  styleUrl: './interpo.component.css',
})
export class InterpoComponent {
  interpodata = 'This is from Interpolation';
  propertybin = 'https://www.google.com';

  sayHello() {
    alert('Hello! from event binding example');
  }

  //for FormModule ko ngModule use garna ko lagi yo use . it could get data in both way.

  username = '';

  //For the Template Reference
  log(value: string) {
    console.log(value);
  }
}
