import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateTypeComponent } from './template-type/template-type.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    FormTemplateComponent,
    TemplateTypeComponent,
    ReactiveFormComponent,
    FormBuilderComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormTemplateComponent,
    TemplateTypeComponent,
    ReactiveFormComponent,
    FormBuilderComponent,
  ],
})
export class FeaturesModule {}
