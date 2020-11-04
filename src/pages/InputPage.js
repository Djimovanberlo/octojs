import React from "react";
import { NavLink } from "react-router-dom";

const InputPage = () => {
  return (
    <>
      <div>
        <h1>Please fill in the form</h1>
        <br></br>
        <h2>What country are you from?</h2>
        <select id="selColor">
          <option value="1">Belgium</option>
          <option value="2">Netherlands</option>
          <option value="3">Russia</option>
          <option value="4">Germany</option>
          <option value="5">France</option>
          <option value="6">US</option>
        </select>
        <h2>How many adults are in your household?</h2>
        <input></input>
        <h2>What is your monthly income?</h2>
        <input></input>
        <h2>If you own a house how much would you be able to rent it for</h2>
        <input></input>
        <h2>If you own stocks, how much would their value be?</h2>
        <input></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </div>
      <NavLink to="/">Back to start</NavLink>
      <br />
      <NavLink to="/output">Calculate</NavLink>
    </>
  );
};

export default InputPage;
