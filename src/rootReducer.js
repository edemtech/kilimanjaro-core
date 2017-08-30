import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import edit from './reducers/editUser';
import table from './reducers/table';

export default combineReducers({
	flashMessages,
	auth,
	table,
	edit,
	routing
});
