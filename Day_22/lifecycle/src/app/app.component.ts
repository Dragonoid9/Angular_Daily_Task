import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lifecycle';
  showComponent = true;
  inputValue = 'Initial value';

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  changeInput() {
    this.inputValue = 'Changed at ' + new Date().toLocaleTimeString();
  }
}
