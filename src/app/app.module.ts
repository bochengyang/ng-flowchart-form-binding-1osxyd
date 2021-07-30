import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';
import { AppComponent } from './app.component';
import { FormStepComponent } from './form-step/form-step.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgFlowchartModule],
  declarations: [AppComponent, FormStepComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
