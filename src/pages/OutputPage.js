import React, { useState } from "react";
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
  const [viewSources, set_viewSources] = useState(false);
  const country = "Belgium";

  const countryData = [
    {
      name: "",
      userIncome: 350,
      countryIncome: 100,
    },
  ];

  const worldData = [
    {
      name: "",
      userIncome: 350,
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
      <NavLink to="/input">Change input</NavLink>
      <br />
      <NavLink to="/facts">More info</NavLink>
      <div
        onMouseEnter={() => {
          set_viewSources(true);
        }}
        onMouseLeave={() => {
          set_viewSources(false);
        }}
        style={{ height: 10, width: 10 }}
      >
        {viewSources ? (
          <div>
            <a
              href="https://www.worlddata.info/average-income.php"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              income per country
            </a>
          </div>
        ) : (
          <div>DOEI</div>
        )}
      </div>
    </div>
  );
};

export default OutputPage;
