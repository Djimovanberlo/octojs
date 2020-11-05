import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { useState } from "react";
import { NavLink } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { postUserInput } from "../store/form/actions";
import { useHistory} from "react-router-dom";

const InputPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedLocation, setSelectedLocation] = useState("");
  const [monthlyIncome, setSelectedMonthlyIncome] = useState("");
  const [meatIntake, setSelectedMeatIntake] = useState("");
  const [useOfPlastic, setSelectedUseOfPlastic] = useState("");
  const [useOfVehicle, setSelectedUseOfVehicles] = useState("");

  function submitHandler(event) {
    console.log("Submitted")
    dispatch(postUserInput({selectedLocation, monthlyIncome, meatIntake, useOfPlastic, useOfVehicle}));

    // history.push("/output")
  }

  //background for the slides <a href="https://www.freepik.com/vectors/tree">Tree vector created by pch.vector - www.freepik.com</a>

  return (

    <div class="fromLeft">
  <h1>Please fill in the form</h1>
<br></br>
<h2>What country are you from?</h2>
  
        <select
          onChange={(event) => setSelectedLocation(event.target.value)}
          className="select"
        >
   <option value = "Belgium">Belgium</option>
   <option value = "Netherlands">Netherlands</option>
   <option value = "Russia">Russia</option>
   <option value = "Germany">Germany</option>
   <option value = "France">France</option>
   <option value = "US">US</option>
  </select>
  <h2>What is your monthly income?</h2>
  <input type= "number" onChange={(event) => setSelectedMonthlyIncome(event.target.value)}></input>
 <br></br>
 <h2> Do you often eat animal-based products? </h2>
 <select
          onChange={(event) => setSelectedMeatIntake(event.target.value)}
          className="select"
        >
  <option value = "--">--</option>
   <option value = "High">I eat meat and dairy products every day</option>
   <option value = "Medium">I Eat meat once every couple of weeks</option>
   <option value = "FairlyLow">I don't eat meat, but I do eat dairy products</option>
   <option value = "Low">I don't eat meat or dairy products</option>
  </select>
  <h2> Do you use products that either contain or have plastic packaging? </h2>
 <select
          onChange={(event) => setSelectedUseOfPlastic(event.target.value)}
          className="select"
        >
  <option value = "--">--</option>
   <option value = "High">Yes</option>
   <option value = "Medium">I try to avoid those products, but I do use them sometimes</option>
   <option value = "Low">I don't use any products that contain plastic</option>
  </select>
  <h2> How do you often travel in a normal week? </h2>
 <select
          onChange={(event) => setSelectedUseOfVehicles(event.target.value)}
          className="select"
        >
  <option value = "--">--</option>
   <option value = "High">By car or another motor vehicle</option>
   <option value = "Medium">When traveling short distances I try to use a bike or I will walk</option>
   <option value = "FairlyLow">I don't own a motor vehicle, so I use the train, bus or bycicle</option>
   <option value = "FLow">I always walk or use a bike</option>
  </select>
<br></br>
<br></br>
 
  {/* <button onClick={history.push("/")}>Back to start</button> */}
      <br />
      <NavLink to="/output"> <button onClick={submitHandler}>Submit</button></NavLink>
    </div>
  );
};

export default InputPage;
