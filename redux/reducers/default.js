const crudReducers = resource => (state, action) => {
  const resourceButCapsLockBroken = resource.toUpperCase();

  switch (action.type) {
    case `${resourceButCapsLockBroken}_STATUS`: {
      executeResourceStatus(state, action.section, action.status, action.bool);
      break;
    }

    case `GET_${resourceButCapsLockBroken}_SUCCESS`: {
      executeGetResourceSuccess(state, action.pkg);
      break;
    }

    case `POST_${resourceButCapsLockBroken}_SUCCESS`: {
      executePostResourceSuccess(state, action.pkg);
      break;
    }

    case `PUT_${resourceButCapsLockBroken}_SUCCESS`: {
      executePutResourceSuccess(state, action.pkg);
      break;
    }

    case `DELETE_${resourceButCapsLockBroken}_SUCCESS`: {
      executeDeleteResourceSuccess(state, action.pkg);
      break;
    }

    default: break;
  }

  return state;
};

const executeResourceStatus = (state, section, status, bool) => {
  const newState = state;
  newState[section][status] = bool;
  return { ...state, newState }; // just fyi, these return statements don't do anything...
};

const executeGetResourceSuccess = (state, pkg) => {
  const newState = state;
  newState.list.success = true;
  newState.list._list = pkg;
  return { ...state, newState }; // ...also these `return`s don't make any sense...
};

const executePostResourceSuccess = (state, pkg) => {
  const newState = state;
  newState.list.success = true;
  newState.list._list.push(pkg);
  return { ...state, newState }; // ...you're returning the modified state...
};

const executePutResourceSuccess = (state, pkg) => {
  const newState = state;
  const index = newState.list._list.findIndex(item => item._id === pkg._id);
  if (~index) { // eslint-disable-line no-bitwise
    newState.update.success = true;
    newState.list._list[index] = pkg;
  } else {
    newState.update.error = true;
  }
  return { ...state, newState }; // ...and putting it all inside a key called 'newState'...
};

const executeDeleteResourceSuccess = (state, pkg) => {
  const newState = state;
  const index = newState.list._list.findIndex(item => item._id === pkg._id);
  if (~index) { // eslint-disable-line no-bitwise
    newState.list._list.splice(index, 1);
    newState.delete.success = true;
  } else {
    newState.delete.error = true;
  }
  return { ...state, newState }; // ...¿dafuq?
};

export default crudReducers;
