import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store';

// import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
// import { setCurrentUser } from './actions/authActions';
import routes from './routes';

const store = configureStore();
const routerHistory = syncHistoryWithStore(hashHistory, store);

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={routerHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
