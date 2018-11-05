import initialState from '../initialState';
import crudReducers from './default';

const sponsorsCrudReducer = crudReducers('sponsors');
const sponsors = (state = initialState.sponsors, action) => { // eslint-disable-line arrow-body-style
  return sponsorsCrudReducer(state, action);
};

export default sponsors;
