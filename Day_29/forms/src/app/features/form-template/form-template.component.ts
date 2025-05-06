import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css',
})
export class FormTemplateComponent implements OnInit, AfterViewChecked {
  @ViewChild('myform') public myform!: NgForm;

  constructor() {}

  ngAfterViewChecked(): void {
    console.log(this.myform);
  }
  ngOnInit(): void {}
}
