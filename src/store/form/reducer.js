const initialstate = [];

export default (state = initialstate, action) => {
  switch (action.type) {
    case "TEMPORARY":
      return [];
    default:
      return state;
  }
};
