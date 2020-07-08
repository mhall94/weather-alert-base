import './assets/css/main.css';

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore } from './configureStore';
import { getLocations } from './actions/locationsActions';
import App from './App';

const getInitialData = async (st: any) => {
  await st.dispatch(getLocations());
};

const store = configureStore();
getInitialData(store);

export default render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app') as HTMLElement,
);
