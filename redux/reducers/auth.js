import initialState from '../initialState';

const auth = (state = initialState.users, action) => {
  const newState = state; // object pointer-copy

  switch (action.type) {
    case 'USER_STATUS': {
      const { section, status, bool } = action;
      newState[section][status] = bool;
      break;
    }

    case 'AUTHORIZE_USER': {
      const { pkg } = action;
      newState.auth.user = pkg;
      newState.auth.authorized = true;
      break;
    }

    case 'LOGOUT_USER': {
      newState.auth.user = null;
      newState.auth.authorized = false;
      break;
    }

    default: break;
  }

  return state;
};

export default auth;
