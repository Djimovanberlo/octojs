import { POST_USERINPUT, REFRESH_COUNTRY } from "./actions";

const initialState = {
  selectedLocation: null,
  monthlyIncome: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USERINPUT:
      console.log("STORED:", action.payload);
      return { ...state, ...action.payload };
    case REFRESH_COUNTRY:
      console.log("STORED", action.payload);
      return { ...state, selectedLocation: action.payload };
    default:
      return state;
  }
};
