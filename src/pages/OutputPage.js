import React from "react";
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

import SingleOutput from "../components/SingleOutput";

const OutputPage = () => {
  const countryData = [
    {
      name: "income",
      "your income": 400,
      "average income in your country": 300,
    },
  ];

  const continentData = [
    {
      name: "income",
      "your income": 450,
      "average income in your continent": 200,
    },
  ];

  const worldData = [
    {
      name: "income",
      "your income": 350,
      "average income in the world": 100,
    },
  ];

  return (
    <>
      <BarChart
        width={500}
        height={300}
        data={countryData}
        maxBarSize={1000}
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
        <Bar dataKey="your income" fill="#8884d8" />
        <Bar dataKey="average income in your country" fill="#82ca9d" />
      </BarChart>

      <BarChart
        width={500}
        height={300}
        data={continentData}
        maxBarSize={1000}
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
        <Bar dataKey="your income" fill="#8884d8" />
        <Bar dataKey="average income in your continent" fill="#82ca9d" />
      </BarChart>

      <BarChart
        width={500}
        height={300}
        data={worldData}
        maxBarSize={1000}
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
        <Bar dataKey="your income" fill="#8884d8" />
        <Bar dataKey="average income in the world" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default OutputPage;
