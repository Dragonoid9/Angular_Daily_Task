import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('hoverEffect', [
      state(
        'default',
        style({
          color: '#10caa7',
          boxShadow: 'inset 0 0 0 0rgb(23, 233, 152)',
          backgroundColor: 'transparent',
        })
      ),
      state(
        'hovered',
        style({
          color: '#fff',
          boxShadow: 'inset 0 0 0 50pxrgb(23, 233, 152)',
          backgroundColor: '#10caa7',
        })
      ),
    ]),
    trigger('clickEffect', [
      state('normal', style({ transform: 'scale(1)' })),
      state('clicked', style({ transform: 'scale(1.2)' })),
      transition('normal => clicked', animate('100ms ease-in')),
      transition('clicked => normal', animate('100ms ease-out')),
    ]),
    trigger('loaderTransition', [
      state(
        'default',
        style({
          width: 'auto',
          height: 'auto',
          padding: '0.75rem 2.5rem',
          fontSize: '1rem',
          borderRadius: '50px',
        })
      ),
      state(
        'loading',
        style({
          width: '50px' /* Increase the loader size */,
          height: '50px' /* Increase the loader size */,
          padding: '0',
          fontSize: '0',
          border: 'none' /* Hide the button border */,
          borderRadius: '50%',
        })
      ),
      transition('default <=> loading', animate('300ms ease-in-out')),
    ]),
    trigger('doneTransition', [
      state('false', style({})),
      state(
        'true',
        style({
          backgroundColor: '#10caa7',
          color: 'white',
          borderColor: '#10caa7',
        })
      ),
      transition('false <=> true', animate('300ms ease-in-out')),
    ]),
  ],
})
export class AppComponent {
  title = 'Angular-Animation';
  state = 'default';
  clickState = 'normal';
  loading = false;
  done = false;

  onClick() {
    this.clickState = 'clicked';
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.done = true;

      setTimeout(() => {
        this.done = false;
      }, 2000);
    }, 2000);
  }
}
