import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { fromJS } from 'immutable';
import routes from '../common/routes';
import configureStore from '../common/store/configureStore';
import { checkAuth } from '../common/actions';

import '../common/style/index.js';


// get initial state from server side
// the variable is from the script setting  of server-side index html
const initialState = window.__PRELOADED_STATE__;

// use initial state to create store and pass to provider
const store = configureStore(fromJS(initialState));
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);


