import * as Redux from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

export function configureStore(): Redux.Store<{}> {
  // tslint:disable-next-line:no-any
  let composeEnhancers: any = Redux.compose;

  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-any
    composeEnhancers =
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
  }

  return Redux.createStore(
    rootReducer,
    composeEnhancers(Redux.applyMiddleware(thunk)),
  );
}
