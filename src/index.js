import React from 'react';
import {Router, browserHistory} from 'react-router';
import routes from './app/routes';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './app/store/create';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
)
