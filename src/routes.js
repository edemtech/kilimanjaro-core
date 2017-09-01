import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import PageZero from './components/pagezero/PageZero';

import requireAuth from './utils/requireAuth';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Greetings} />
		<Route path="signup" component={requireAuth(SignupPage)} />
		<Route path="login" component={LoginPage} />
		<Route path="page00" component={PageZero} />
		<Route path="page01" component={PageOne} />
	</Route>
)
