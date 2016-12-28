import React from 'react';
import {Router, IndexRoute, hashHistory, Route} from 'react-router';
import Main from 'Main';
import Home from 'Home';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
