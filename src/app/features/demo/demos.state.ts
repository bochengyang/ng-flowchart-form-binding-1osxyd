import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module';

export const FEATURE_NAME = 'demos';
export const selectDemos =
  createFeatureSelector<State, DemosState>(FEATURE_NAME);
export const reducers: ActionReducerMap<DemosState> = {
};

export interface DemosState {
}

export interface State extends AppState {
  demos: DemosState;
}
