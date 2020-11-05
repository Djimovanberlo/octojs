import React from "react";
import { NavLink } from "react-router-dom";

 


const WelcomePage = () => {
  return (
    <div class="fromRight">
      <h1 >How well off are you?</h1>
      <NavLink to="/input"><button>Click to find out</button></NavLink>
      <br></br>
      {/* <img src="https://i.gifer.com/7fWl.gif"></img> */}
    </div>
  );
};

export default WelcomePage;
