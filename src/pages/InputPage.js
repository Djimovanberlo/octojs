import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { postUserInput } from "../store/form/actions";
import { useHistory, NavLink } from "react-router-dom";

import { income } from "../constants/Income";

const InputPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedLocation, setSelectedLocation] = useState("");
  const [monthlyIncome, setSelectedMonthlyIncome] = useState("");

  function submitHandler(event) {
    console.log("Submitted");
    dispatch(postUserInput({ selectedLocation, monthlyIncome }));
    // history.push("/output")
  }

  return (
    <div className="divIn">
      <h1>Please fill in the form</h1>
      <br></br>
      <h2>What country are you from?</h2>

      <select
        onChange={(event) => setSelectedLocation(event.target.value)}
        className="select"
      >
        {income
          .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
          .map((country, index) => {
            return (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            );
          })}
      </select>
      <h2>What is your monthly income?</h2>
      <input
        type="number"
        onChange={(event) => setSelectedMonthlyIncome(event.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button onClick={submitHandler}>Submit</button>
      {/* <button onClick={history.push("/")}>Back to start</button> */}
      <br />
      <NavLink to="/output">GO TO OUPUT</NavLink>
    </div>
  );
};

export default InputPage;
