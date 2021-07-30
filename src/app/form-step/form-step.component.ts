import { Component, OnInit } from '@angular/core';
import { NgFlowchartStepComponent } from '@joelwenzel/ng-flowchart';

export type MyForm = {
  input1: string;
};

@Component({
  selector: 'app-form-step',
  template: `
    <div class="step" #canvasContent>
      <span>My Form</span>
      <input
        type="text"
        [(ngModel)]="data.input1"
        draggable="true"
        ondragstart="event.preventDefault();
        event.stopPropagation();"
      />
    </div>
  `
})
export class FormStepComponent<MyForm> extends NgFlowchartStepComponent
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
