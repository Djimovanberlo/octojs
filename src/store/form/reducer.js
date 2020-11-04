import { POST_LOCATION } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOCATION:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
