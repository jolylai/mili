import { Router,Route,Redirect,IndexRoute,browserHistory,hashHistory } from 'react-router'
import React from 'react'
import App from '../containers/App'
import HomeContainer from '../containers/HomeContainer'
import TopicContainer from '../containers/TopicContainer'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

let RouteConfig = (
  <Router history={history}>
    <Route path='/' component={ App }>
      <IndexRoute component={ HomeContainer } />
      <Route path="/views/topic" component={ TopicContainer } />
    </Route>
  </Router>
);
export default RouteConfig;
