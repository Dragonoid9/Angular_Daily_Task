import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipesComponent } from './built-in-pipes.component';

import { CommonModule, DatePipe } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('BuiltInPipesComponent', () => {
  let component: BuiltInPipesComponent;
  let fixture: ComponentFixture<BuiltInPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuiltInPipesComponent],
      imports: [CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiltInPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should display today's date using default format", () => {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(component.today);
    const content = fixture.debugElement.query(
      By.css('div:first-child p:nth-child(3)')
    ).nativeElement.textContent;
    expect(content).toContain(formattedDate);
  });

  it("should display today's date in shortDate format", () => {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(component.today, 'shortDate');
    const content = fixture.debugElement.query(
      By.css('div:first-child p:nth-child(4)')
    ).nativeElement.textContent;
    expect(content).toContain(formattedDate);
  });

  it('should display custom formatted date (MM/dd/yyyy)', () => {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(component.today, 'MM/dd/yyyy');
    const content = fixture.debugElement.query(
      By.css('div:first-child p:nth-child(5)')
    ).nativeElement.textContent;
    expect(content).toContain(formattedDate);
  });

  it('should display custom formatted date (yyyy:MM:dd)', () => {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(component.today, 'yyyy:MM:dd');
    const content = fixture.debugElement.query(
      By.css('div:first-child p:nth-child(6)')
    ).nativeElement.textContent;
    expect(content).toContain(formattedDate);
  });

  it('should display custom formatted date (yyyy/MM/dd)', () => {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(component.today, 'yyyy/MM/dd');
    const content = fixture.debugElement.query(
      By.css('div:first-child p:nth-child(7)')
    ).nativeElement.textContent;
    expect(content).toContain(formattedDate);
  });

  it('should display original text', () => {
    const content = fixture.nativeElement
      .querySelector('#originalText')
      .textContent.trim();
    expect(content).toBe(component.text);
  });

  it('should display uppercase text', () => {
    const content = fixture.nativeElement
      .querySelector('#upperText')
      .textContent.trim();
    expect(content).toContain(`Uppercase : ${component.text.toUpperCase()}`);
  });

  it('should display lowercase text', () => {
    const content = fixture.nativeElement
      .querySelector('#lowerText')
      .textContent.trim();
    expect(content).toContain(`Lowercase : ${component.text.toLowerCase()}`);
  });
});
