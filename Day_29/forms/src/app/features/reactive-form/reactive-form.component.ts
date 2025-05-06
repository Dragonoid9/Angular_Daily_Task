import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  reactiveform: FormGroup;

  constructor() {
    this.reactiveform = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
    });
  }

  submitForm() {
    console.log(this.reactiveform.value);
  }
}
