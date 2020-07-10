import { PROPAGATE_USER } from "./actions";

const initialState = {
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PROPAGATE_USER:
      return { ...state, data: payload.user };

    default:
      return state;
  }
};
