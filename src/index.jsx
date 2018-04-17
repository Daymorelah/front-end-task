import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import store from './Store/configureStore';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  /* eslint-disable no-undef */
  document.getElementById('app'),
);

