import { PROPAGATE_USER, PROPAGATE_USER_SUCCESS, PROPAGATE_USER_FAILURE } from "./actions";

const initialState = {
  data: {},
  isFetching: false,
  err: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROPAGATE_USER:
      return { ...state, isFetching: true };
    case PROPAGATE_USER_SUCCESS:
      return { ...state, isFetching: false, data: payload.user}
    case PROPAGATE_USER_FAILURE:
      return {...state, isFetching: false, err: payload.err}
    default:
      return state;
  }
};
