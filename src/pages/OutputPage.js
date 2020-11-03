import React, { useState } from "react";
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

import SingleOutput from "../components/SingleOutput";

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
      name: "income",
      userIncome: 350,
      continentIncome: 200,
    },
  ];

  const worldData = [
    {
      name: "income",
      userIncome: 350,
      worldIncome: 100,
    },
  ];

  const [barStack, set_barStack] = useState(false);

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
          {!barStack ? (
            <Bar
              name="your monthly income"
              dataKey="userIncome"
              fill="#8884d8"
            />
          ) : (
            <Bar
              name="your monthly income"
              dataKey="userIncome"
              fill="#8884d8"
              stackId="a"
            />
          )}
          {!barStack ? (
            <Bar
              name={`average monthly income in ${country}`}
              dataKey="countryIncome"
              fill="#82ca9d"
            />
          ) : (
            <Bar
              name={`average monthly income in ${country}`}
              dataKey="countryIncome"
              fill="#82ca9d"
              stackId="a"
            />
          )}
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
          {!barStack ? (
            <Bar
              name="your monthly income"
              dataKey="userIncome"
              fill="#8884d8"
            />
          ) : (
            <Bar
              name="your monthly income"
              dataKey="userIncome"
              fill="#8884d8"
              stackId="a"
            />
          )}
          {!barStack ? (
            <Bar
              name={`average monthly income in ${continent}`}
              dataKey="continentIncome"
              fill="#82ca9d"
            />
          ) : (
            <Bar
              name={`average monthly income in ${continent}`}
              dataKey="continentIncome"
              fill="#82ca9d"
              stackId="a"
            />
          )}
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

          {!barStack ? (
            <Bar
              name="your monthly income"
              dataKey="userIncome"
              fill="#8884d8"
            />
          ) : (
            <Bar
              name="your monthly income"
              dataKey="userIncome"
              fill="#8884d8"
              stackId="a"
            />
          )}

          {!barStack ? (
            <Bar
              name="average monthly income in the world"
              dataKey="worldIncome"
              fill="#82ca9d"
            />
          ) : (
            <Bar
              name="average monthly income in the world"
              dataKey="worldIncome"
              fill="#82ca9d"
              stackId="a"
            />
          )}
        </BarChart>
      </div>
      <div className="div4">
        <button
          onClick={() => {
            set_barStack(!barStack);
          }}
        >
          Stack bars
        </button>
        <button
          onClick={() => {
            console.log("HOW CAN I HELP?!??!?!?!?!?");
          }}
        >
          How can I help?
        </button>
      </div>
    </div>
  );
};

export default OutputPage;
