import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './Components/app';

const showoff = 'water';
const Routes = () => (
  <Switch>
    <App path="/" component={App}>
      <Route path="/about" component={showoff} />
    </App>
  </Switch>
);

export default Routes;
