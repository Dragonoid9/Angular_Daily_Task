import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  templateUrl: './lifecycle-test.component.html',
  styleUrl: './lifecycle-test.component.css',
})
export class LifecycleTestComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() testInput: string = '';

  constructor() {
    console.log('✅ constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('🔁 ngOnChanges called', changes);
  }

  ngOnInit(): void {
    console.log('🚀 ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('🔎 ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('📥 ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('🔁 ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('👀 ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('🔁 ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('💥 ngOnDestroy called');
  }
}
