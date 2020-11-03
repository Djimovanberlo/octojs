const initialstate = null;

export default (state = initialstate, action) => {
  switch (action.type) {
    case "TEMPORARY":
      return null;
    default:
      return state;
  }
};
