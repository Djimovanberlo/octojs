import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import WorldMap from "./WorldMap";
import { selectLocationIncome } from "../store/form/selectors";

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

const Graphs = () => {
  const { selectedLocation, monthlyIncome, countryIncome } = useSelector(
    selectLocationIncome
  );

  const [viewSources, set_viewSources] = useState(false);


  const countryData = [
    {
      name: "",
      userIncome: monthlyIncome,
      countryIncome: countryIncome,
    },
  ];

  const worldData = [
    {
      name: "",
      userIncome: monthlyIncome,
      worldIncome: Math.round(2920 / 12),
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
          <XAxis stroke="white" dataKey="name" />
          <YAxis stroke="white" />
          <Tooltip cursor={{ fill: "#1b3150" }} />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#f4a64f" />
          <Bar
            name={`average monthly income in ${selectedLocation}`}
            dataKey="countryIncome"
            fill="#00acc2"
          />
        </BarChart>
      </div>

      {/* worldgraph */}
      <div className="div2">
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
          <XAxis stroke="white" dataKey="name" />
          <YAxis stroke="white" />
          <Tooltip cursor={{ fill: "#1b3150" }} />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#f4a64f" />
          <Bar
            name="average monthly income in the world"
            dataKey="worldIncome"
            fill="#8bba15"
          />
        </BarChart>
      </div>
      {!countryIncome ? (
        <div>Sorry, it apears we do not have data for that country</div>
      ) : null}
    </div>
  );
};

export default Graphs;
