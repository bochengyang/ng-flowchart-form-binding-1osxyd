import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import {
  NgFlowchartCanvasDirective,
  NgFlowchartStepRegistry,
  NgFlowchart
} from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'demo-dataflow',
  templateUrl: './dataflow.component.html',
  styleUrls: ['./dataflow.component.scss']
})
export class DataFlowComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  callbacks: NgFlowchart.Callbacks = {};
  options: NgFlowchart.Options = {
    stepGap: 60,
    rootPosition: 'TOP_CENTER',
    zoom: {
      mode: 'DISABLED',
      defaultStep: 0
    }
  };

  @ViewChild('normalStep')
  normalStepTemplate: TemplateRef<any>;

  sampleJson = '{"root":{"id":"s1626937288917","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[{"id":"s1626937292857","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[{"id":"s1626937312566","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]}]},{"id":"s1626937295911","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[{"id":"s1626937315009","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]}]}]}}';

  items = [
    {
      name: 'Logger',
      type: 'log',
      data: {
        name: 'Log',
        icon: { name: 'log-icon', color: 'blue' },
        config: {
          message: null,
          severity: null
        }
      }
    }
  ];

  @ViewChild(NgFlowchartCanvasDirective)
  canvas: NgFlowchartCanvasDirective;

  disabled = false;

  constructor(
    private stepRegistry: NgFlowchartStepRegistry
  ) {
    this.callbacks.onDropError = this.onDropError;
    this.callbacks.onMoveError = this.onMoveError;
    this.callbacks.beforeRender = this.beforeRender;
    this.callbacks.afterRender = this.afterRender;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.stepRegistry.registerStep('log', this.normalStepTemplate);
    
    setTimeout(() => {
      console.log('Hello');
      this.showUpload();
    }, 1000);
  }

  beforeRender() {
    console.log('beforeRender');
  }

  afterRender() {
    console.log('afterRender');
  }

  onDropError(error: NgFlowchart.DropError) {
    console.log(error);
  }

  onMoveError(error: NgFlowchart.MoveError) {
    console.log(error);
  }

  showUpload() {
    this.canvas.getFlow().upload(this.sampleJson);
  }

  clearData() {
    this.canvas.getFlow().clear();
  }

  showFlowData() {
    let json = this.canvas.getFlow().toJSON(4);

    var x = window.open();
    x.document.open();
    x.document.write(
      '<html><head><title>Flowchart Json</title></head><body><pre>' +
      json +
      '</pre></body></html>'
    );
    x.document.close();
  }

  onDelete(id) {
    this.canvas
      .getFlow()
      .getStep(id)
      .destroy(true);
  }
}
