import * as Redux from 'redux';

import { AllActions } from '../actions/allActions';
import AppState from '../interfaces/AppState';
import locationsReducer from './locationsReducer';

const appReducer = Redux.combineReducers<AppState>({
  locations: locationsReducer,
});

export const rootReducer = (state: any, action: AllActions) => {
  return appReducer(state, action);
};
