// K E V I N D U X™ v1.0.0
// conceived by the man, the myth, the Kevin
// in loving memory, forever in our hearts
// except for the devs, because maintaining his code is impossible
// cool guy tho :)

const crudState = () => ({
  list: {
    _list: [],
    loading: false,
    error: false,
    success: false,
  },
  form: {
    loading: false,
    error: false,
    success: false,
  },
  update: {
    loading: false,
    error: false,
    success: false,
  },
  delete: {
    loading: false,
    error: false,
    success: false,
  },
});

const initialState = {
  users: {
    auth: {
      user: null,
      authorized: false,
      loading: false,
      error: false,
    },
  },
  pages: crudState(),
  events: crudState(),
  itineraries: crudState(),
  sponsors: crudState(),
};

export default initialState;
