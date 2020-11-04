import { POST_USERINPUT } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USERINPUT:
      console.log("STORED:", action.payload);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
