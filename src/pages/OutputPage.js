import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Graphs from "../components/Graphs";
import WorldMap from "../components/WorldMap";
import "../styles/OutputPage.css";

const OutputPage = () => {

  return (
    <div class="fromDown">
      <Graphs />
      <WorldMap />
    </div>
  );
};

export default OutputPage;
