import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
// import SignupPage from './components/signup/SignupPage';
// import LoginPage from './components/login/LoginPage';
import PageZero from './components/pagezero/PageZero';
import PageOne from './components/pageone/PageOne';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="page00" component={PageZero} />
		<Route path="page01" component={PageOne} />
	</Route>
)
// <Route path="login" component={LoginPage} />
// <Route path="signup" component={requireAuth(SignupPage)} />
// <Route path="page01" component={PageOne} />
