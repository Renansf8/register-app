import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
