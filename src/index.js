import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import appStore from './stores/appStore'
import RouteConfig from './router/router.js'
import { Provider } from 'react-redux'

// Render the main component into the dom
ReactDOM.render(
  <Provider store={appStore}>
    { RouteConfig }
  </Provider>
  , document.getElementById('app'));
