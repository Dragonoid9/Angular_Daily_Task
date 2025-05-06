import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateTypeComponent } from './features/template-type/template-type.component';
import { ReactiveFormComponent } from './features/reactive-form/reactive-form.component';
import { FormBuilderComponent } from './features/form-builder/form-builder.component';
import { FormTemplateComponent } from './features/form-template/form-template.component';

const routes: Routes = [
  { path: 'simpletemplate', component: FormTemplateComponent },
  { path: 'tempform', component: TemplateTypeComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'formbuilder', component: FormBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
