import React from "react";
import { NavLink } from "react-router-dom";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import "../styles/OutputPage.css";

const OutputPage = () => {
  const country = "Belgium";
  const continent = "Europe";

  const countryData = [
    {
      name: "",
      userIncome: 350,
      countryIncome: 100,
    },
  ];

  const continentData = [
    {
      name: "",
      userIncome: 350,
      continentIncome: 200,
    },
  ];

  const worldData = [
    {
      name: "",
      userIncome: 350,
      worldIncome: 50,
    },
  ];

  const combinedData = [
    {
      name: "",
      userIncome: 350,
      countryIncome: 100,
      continentIncome: 200,
      worldIncome: 50,
    },
  ];

  return (
    <div className="parent">
      {/* country graph */}
      <div className="div1">
        <BarChart
          width={500}
          height={300}
          data={countryData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#8884d8" />
          <Bar
            name={`average monthly income in ${country}`}
            dataKey="countryIncome"
            fill="#82ca9d"
          />
        </BarChart>
      </div>
      {/* continent graph */}
      <div className="div2">
        <BarChart
          width={500}
          height={300}
          data={continentData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#8884d8" />
          <Bar
            name={`average monthly income in ${continent}`}
            dataKey="continentIncome"
            fill="#d3d31d"
          />
        </BarChart>
      </div>

      {/* worldgraph */}
      <div className="div3">
        <BarChart
          width={500}
          height={300}
          data={worldData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#8884d8" />
          <Bar
            name="average monthly income in the world"
            dataKey="worldIncome"
            fill="#c62a2a"
          />
        </BarChart>
      </div>
      {/* comboGraph */}
      <div className="div4">
        <BarChart
          width={500}
          height={300}
          data={combinedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#8884d8" />
          <Bar
            name={`average monthly income in ${country}`}
            dataKey="countryIncome"
            fill="#82ca9d"
          />
          <Bar
            name={`average monthly income in ${continent}`}
            dataKey="continentIncome"
            fill="#d3d31d"
          />
          <Bar
            name="average monthly income in the world"
            dataKey="worldIncome"
            fill="#c62a2a"
          />
        </BarChart>
      </div>
      <NavLink to="/input">Change input</NavLink>
      <br />
      <NavLink to="/facts">More info</NavLink>
    </div>
  );
};

export default OutputPage;
