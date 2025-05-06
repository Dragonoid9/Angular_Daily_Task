import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appKonamiUnlock]',
})
export class KonamiUnlockDirective implements OnInit, OnDestroy {
  private konamiCode: string[] = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];
  private inputSequence: string[] = [];
  private listener: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Hide the element initially
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');

    // Listen for key events on the window
    this.listener = this.renderer.listen(
      'window',
      'keydown',
      (event: KeyboardEvent) => {
        this.inputSequence.push(event.key);

        // Trim to match konami code length
        if (this.inputSequence.length > this.konamiCode.length) {
          this.inputSequence.shift();
        }

        // Check for match
        if (this.inputSequence.join('') === this.konamiCode.join('')) {
          this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
        }
      }
    );
  }

  ngOnDestroy() {
    // Clean up the listener when the directive is destroyed
    if (this.listener) {
      this.listener();
    }
  }
}
