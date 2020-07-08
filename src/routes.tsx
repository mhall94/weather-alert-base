import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const MainRouter = () => (
  <Switch>
    <Route path="/" exact={true} component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default MainRouter;
