import React from "react";
import { useDispatch } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highchartsMap from "highcharts/modules/map";
import mapData from "@highcharts/map-collection/custom/world.geo.json";
import "../styles/WorldMap.css";
import { data } from "../constants/data";
import { refreshCountry } from "../store/form/actions";
import { useSelector } from "react-redux";

import { selectLocationIncome } from "../store/form/selectors";

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
    backgroundColor: "#1b3150",
    plotBackgroundColor: "#1b3150",
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
  const { countryIncome } = useSelector(selectLocationIncome);

  const dispatch = useDispatch();

  const sumbitCountry = (country) => {
    dispatch(refreshCountry(country));
  };

  chart.plotOptions["series"]["point"]["events"]["click"] = (event) => {
    sumbitCountry(event.point["hc-key"]);
  };

  return (
    <div id="container" className="fadeIn">
      <HighchartsReact
        highcharts={Highcharts}
        options={chart}
        constructorType={"mapChart"}
      />
      {!countryIncome ? (
        <div style={{ textAlign: "center" }}>
          Sorry, it apears we do not have data for that country
        </div>
      ) : null}
    </div>
  );
}
