import { POST_USERINPUT, REFRESH_COUNTRY } from "./actions";
import { income } from "../../constants/Income";

const initialState = {
  selectedLocation: null,
  monthlyIncome: null,
  countryIncome: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USERINPUT:
      const foundIncome = income.find((countryData) => {
        return countryData.name === action.payload.selectedLocation;
      });
      return { ...state, ...action.payload, countryIncome: foundIncome.income };
    case REFRESH_COUNTRY:
      console.log("FRESHLY STORED", action.payload);
      return { ...state, selectedLocation: action.payload };
    default:
      return state;
  }
};
