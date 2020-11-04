import React, { useState } from "react";
import { useDispatch } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
// import * as Exporting from "highcharts/modules/exporting";
import "../styles/WorldMap.css";
// import Country from "../Game/Country";
import { data } from "../constants/data";
import { refreshCountry } from "../store/form/actions";

highchartsMap(Highcharts);

const plotOptions = {
  series: {
    point: {
      events: {
        click: null,
      },
    },
  },
};

let tooltip = { enabled: true };

const chart = {
  chart: {
    map: "world",
    backgroundColor: "#2d2d2d",
    plotBackgroundColor: "#2d2d2d",
    height: 500,
    width: 800,
  },
  title: {
    text: null,
  },
  credits: {
    enabled: false,
  },
  tooltip,
  //Pop-up on hover. Disable for the game.
  mapNavigation: {
    enabled: true, //ability to zoom
  },
  colorAxis: {
    min: 999,
    max: 1000,
    visible: false,
  },

  plotOptions,

  series: [
    {
      // Use the gb-all map with no data as a basemap
      data: data,
      name: "Country",
      mapData: mapData,

      borderColor: "grey",
      nullColor: "white",
      showInLegend: false,
      states: {
        backgroundColor: "transparent",
        hover: {
          color: "#00acc2",
        },
      },
    },
  ],
};

export default function WorldMap() {
  // const [country, set_Country] = useState("");
  // console.log("THIS COUNTRY", country);

  const dispatch = useDispatch();

  const sumbitCountry = (country) => {
    dispatch(refreshCountry(country));
  };

  chart.plotOptions["series"]["point"]["events"]["click"] = (event) => {
    // set_Country(event.point["hc-key"].toUpperCase());
    sumbitCountry(event.point["hc-key"]);
  };

  //   if (category === "country") {
  //     chart.tooltip["enabled"] = false;
  //   }

  //   const [options, setOptions] = useState(chart);

  return (
    <div id="container">
      {/* <Country clickedCountry={country} category={category} /> */}
      <HighchartsReact
        highcharts={Highcharts}
        options={chart}
        constructorType={"mapChart"}
      />
    </div>
  );
}
