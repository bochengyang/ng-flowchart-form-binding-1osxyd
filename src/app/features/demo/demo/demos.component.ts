import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

@Component({
  selector: 'demos-root',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosComponent {
  examples = [
    { link: 'dataflow', label: 'Data Flow' }
  ];
}
