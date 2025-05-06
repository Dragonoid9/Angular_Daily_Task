import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { KonamiUnlockDirective } from './directives/konami-unlock.directive';

@NgModule({
  declarations: [HighlightDirective, KonamiUnlockDirective],
  imports: [CommonModule],
  exports: [HighlightDirective, KonamiUnlockDirective],
})
export class SharedModule {}
