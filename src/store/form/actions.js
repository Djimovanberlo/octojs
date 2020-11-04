export const POST_USERINPUT = "POST_URSERINPUT";

export const REFRESH_COUNTRY = "REFRESH_COUNTRY";

export const postUserInput = (payload) => {
  return {
    type: POST_USERINPUT,
    payload,
  };
};

export const refreshCountry = (payload) => {
  return {
    type: REFRESH_COUNTRY,
    payload,
  };
};
