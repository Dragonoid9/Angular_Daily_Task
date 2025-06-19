import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-template-type',
  templateUrl: './template-type.component.html',
  styleUrl: './template-type.component.css',
})
export class TemplateTypeComponent {
  public user: User = {
    name: '',
    email: '',
  };

  public submitform(form: NgForm): void {
    if (form.valid) {
      console.log(form.value, this.user);
    }
  }
  public resetForm(formvalue: NgForm): void {
    formvalue.reset();
    // could also use formvalue.resetForm();
  }
  public loadFormValue(tempform: NgForm): void {
    let user: User = {
      name: 'Hero',
      email: 'Hero@gmail.com',
    };

    tempform.setValue(user);
  }
}
