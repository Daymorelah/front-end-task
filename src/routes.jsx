import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './Components/app';
import Board from './Components/board';
import Welcome from './Components/welcome';

const Routes = () => (
  <Switch>
    <App path="/" component={App}>
      <Switch>
        <Route path="/welcome" component={Welcome} />
        <Route exact path="/play" component={Board} />
      </Switch>
    </App>
  </Switch>
);

export default Routes;
