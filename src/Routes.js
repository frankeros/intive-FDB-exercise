import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/presentational/Home';
import Revisited from './components/presentational/Revisited';
import Unauthorized from './components/presentational/Unauthorized';
import AuthRequiredRoute from './AuthRequiredRoute';

export default () => {
  return (
    <Switch>
      <Route exact
        path={'/'}
        component={Home}
      />
      <AuthRequiredRoute exact
        path={'/revisited'}
        component={Revisited}
      />
       <Route exact
        path={'/unauthorized'}
        component={Unauthorized}
      />
      <AuthRequiredRoute exact
        path={'/:lng/revisited'}
        component={Revisited}
      />

      <Route exact
        path={'/:lng/unauthorized'}
        component={Unauthorized}
      />
      <Route exact
        path={'/:lng'}
        component={Home}
      />
    </Switch>

  )
}