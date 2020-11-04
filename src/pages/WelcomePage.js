import React from "react";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <>
      <h1>How well off are you?</h1>
      <NavLink to="/input">Click to find out</NavLink>
    </>
  );
};

export default WelcomePage;
