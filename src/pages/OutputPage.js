import React from "react";

import Graphs from "../components/Graphs";
import WorldMap from "../components/WorldMap";
import Wasteful from "../components/Wasteful";
import "../styles/OutputPage.css";

const OutputPage = () => {
  return (
    <div className="fromDown">
      <Graphs />
      <WorldMap />
      <Wasteful />
    </div>
  );
};

export default OutputPage;
