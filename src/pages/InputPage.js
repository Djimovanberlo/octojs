import React from "react";
import { useState } from "react";


const InputPage = () => {

  const [selectedLocation, setSelectedLocation] = useState("");
  const [household, setSelectedHousehold] = useState("");
  const [monthlyIncome, setSelectedMonthlyIncome] = useState("");
  const [rent, setSelectedRent] = useState("");
  const [selectedStocks, setSelectedStocks] = useState("");

    return (
    <div>
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
  <h2>How many adults are in your household?</h2>
  <input type= "number" onChange={(event) => setSelectedHousehold(event.target.value)}></input>
  <h2>What is your monthly income?</h2>
  <input type= "number" onChange={(event) => setSelectedMonthlyIncome(event.target.value)}></input>
  <h2>If you own a house how much would you be able to rent it for</h2>
  <input type= "number" onChange={(event) => setSelectedRent(event.target.value)}></input>
  <h2>If you own stocks, how much would their value be?</h2>
  <input type= "number"onChange={(event) => setSelectedStocks(event.target.value)}></input>
<br></br>
<br></br>
  <button>Submit</button>
  </div>
    
    )
};

export default InputPage;
