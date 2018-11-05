import initialState from '../initialState';
import crudReducers from './default';

const pagesCrudReducer = crudReducers('pages');
const pages = (state = initialState.pages, action) => { // eslint-disable-line arrow-body-style
  return pagesCrudReducer(state, action);
};

export default pages;
