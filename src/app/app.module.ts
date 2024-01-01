import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { RectiveFormDemoComponent } from './rective-form-demo/rective-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    RectiveFormDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
