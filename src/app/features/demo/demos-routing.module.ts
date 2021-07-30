import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosComponent } from './demo/demos.component';
import { DataFlowComponent } from './dataflow/components/dataflow.component';

const routes: Routes = [
  { 
    path: '', 
    component: DemosComponent,
    children: [
      {
        path: '',
        redirectTo: 'dataflow',
        pathMatch: 'full'
      },
      {
        path: 'dataflow',
        component: DataFlowComponent,
        data: { title: 'dataflow' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosRoutingModule { }
