import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './scripts/components/Home/Home';
import App from './scripts/components/App';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
)