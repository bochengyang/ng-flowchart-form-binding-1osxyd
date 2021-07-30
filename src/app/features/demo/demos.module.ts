import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FEATURE_NAME, reducers } from './demos.state';
import { SharedModule } from '../../shared/shared.module';
import { environment } from '../../../environments/environment';

import { DemosComponent } from './demo/demos.component';
import { DemosRoutingModule } from './demos-routing.module';

import { DemosEffects } from './demos.effects';

import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';
import { DataFlowComponent } from './dataflow/components/dataflow.component';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/demo/`,
    '.json'
  );
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SharedModule,
    DemosRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducers),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    }),
    EffectsModule.forFeature([
      DemosEffects,
    ]),
    NgFlowchartModule
  ],
  declarations: [
    DemosComponent,
    DataFlowComponent,
  ],
  bootstrap: [
    DemosComponent
  ],
  providers: [
  ]
})
export class DemosModule { }
