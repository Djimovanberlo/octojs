import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

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

const OutputPage = () => {
  const [viewSources, set_viewSources] = useState(false);

  const { selectedLocation, monthlyIncome } = useSelector(selectLocationIncome);
  console.log("SELECTED:", selectedLocation, monthlyIncome);

  const countryData = [
    {
      name: "",
      userIncome: monthlyIncome,
      countryIncome: 100,
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="your monthly income" dataKey="userIncome" fill="#f4a64f" />
          <Bar
            name={`average monthly income in ${selectedLocation}`}
            dataKey="countryIncome"
            fill="#8bba15"
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
          <Bar name="your monthly income" dataKey="userIncome" fill="#f4a64f" />
          <Bar
            name="average monthly income in the world"
            dataKey="worldIncome"
            fill="#00acc2"
          />
        </BarChart>
      </div>
      <div>
        <div
          onMouseEnter={() => {
            set_viewSources(true);
          }}
          onMouseLeave={() => {
            set_viewSources(false);
          }}
          style={{ height: 10, width: 10 }}
        >
          <div style={{ width: 250, height: 50, textAlign: "center" }}>
            {viewSources ? (
              <div>
                <a
                  href="https://www.worlddata.info/average-income.php"
                  target="_blank"
                  style={{ cursor: "pointer" }}
                >
                  average income per country
                </a>
                <br />
                <a
                  href="https://news.gallup.com/poll/166211/worldwide-median-household-income-000.aspx"
                  target="_blank"
                  style={{ cursor: "pointer" }}
                >
                  average income in the world
                </a>
              </div>
            ) : (
              <div>View sources</div>
            )}
          </div>
          <div style={{ width: 250, height: 50, textAlign: "center" }}>
            <NavLink to="/input">Change input</NavLink>
            <br />
            <NavLink to="/donations">More info</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputPage;
