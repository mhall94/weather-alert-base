import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import * as React from 'react';

import AppState from './interfaces/AppState';
import LocationsState from './interfaces/LocationsState';
import MainRouter from './routes';

interface AppProps {
  actions: any;
  locations: LocationsState;
}

class App extends React.Component<RouteComponentProps<{}> & AppProps, {}> {
  render() {
    return <MainRouter />;
  }
}

export function mapStateToProps(state: AppState) {
  return {
    locations: state.locations,
  };
}

export default withRouter(connect(mapStateToProps)(App) as any);
