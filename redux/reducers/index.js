import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as snacks } from 'react-notification-system-redux';
import users from './auth';
import pages from './pages';
import sponsors from './sponsors';

const rootReducer = combineReducers({
  users,
  pages,
  form,
  snacks,
  sponsors,
});

export default rootReducer;
