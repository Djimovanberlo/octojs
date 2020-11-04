import { POST_USERINPUT } from "./actions";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USERINPUT:
      console.log(action.payload)
      return { ...state, ...action.payload };

    default:
      return state;
  }
};


