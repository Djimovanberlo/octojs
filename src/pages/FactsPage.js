import React from "react";
import "../facts.css";

export default function FactsPage() {
  return (
    <div>
      <div className="title">
        <h1>World poverty Facts</h1>
      </div>
      <ul className="facts">
        <li style={{ padding: "1em" }}>
          689 million people living on less than $1.90 a day. At higher poverty
          lines, 24.1 percent of the world lived on less than $3.20 a day and
          43.6 percent on less than $5.50 a day in 2017.
        </li>
        <li style={{ padding: "1em" }}>
          Half of the poor are children. Women represent a majority of the poor
          in most regions and among some age groups. About 70 percent of the
          global poor aged 15 and over have no schooling or only some basic
          education.
        </li>
        <li style={{ padding: "1em" }}>
          More than 40 percent of the global poor live in economies affected by
          fragility, conflict and violence, and that number is expected to rise
          to 67 percent in the next decade. Those economies have just 10 percent
          of the world’s population.
        </li>
        <li style={{ padding: "1em" }}>
          About 132 million of the global poor live in areas with high flood
          risk.
        </li>
      </ul>
    </div>
  );
}
