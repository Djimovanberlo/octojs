import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/WastefulInfo.css";

function WasteInfo() {
  const [viewSources, set_viewSources] = useState(false);

  return (
    <div className="wasteful_parent">
      <div className="wasteful_div1">
        <h1>Animal-based food facts</h1>
      </div>
      <ul className="wasteful_div2">
        <li style={{ padding: "1em" }}>
          Overall info: Producing just one hamburger uses enough fossil fuel to
          drive a small car 20 miles. Of all raw materials and fossil fuels used
          in the U.S., more than one-third are devoted to raising animals for
          food.
        </li>
        <li style={{ padding: "1em" }}>
          More than 80 percent of the corn we grow and more than 95 percent of
          the oats are fed to livestock. The world’s cattle alone consume a
          quantity of food equal to the caloric needs of 8.7 billion people—more
          than the entire human population on Earth. According to the Worldwatch
          Institute, “Roughly 2 of every 5 tons of grain produced in the world
          is fed to livestock, poultry, or fish; decreasing consumption of these
          products, especially of beef, could free up massive quantities of
          grain and reduce pressure on land.”
        </li>
        <li style={{ padding: "1em" }}>
          Given that the climate impact of plant-based foods is typically 10 to
          50 times smaller than that of animal products, it follows that
          switching from a largely meat-based diet to a vegetarian or vegan diet
          could help to reduce emissions.
        </li>
        <li style={{ padding: "1em" }}>
          A taste for meat has had a particular impact on land. The mass of
          animals raised for slaughter on Earth now outweighs wildlife by a
          factor of 15-to-1. For example, for every person on the planet, there
          are approximately three chickens.
        </li>
      </ul>
      <div className="wasteful_div3">
        <h1>Affects of Plastic use facts</h1>
      </div>
      <ul className="wasteful_div3">
        <li style={{ padding: "1em" }}>
          From cell phones to bicycle helmets to IV bags, plastic has molded
          society in ways that make life easier and safer. But the synthetic
          material also has left harmful imprints on the environment and perhaps
          human health.
        </li>
        <li style={{ padding: "1em" }}>
          There are tiny pieces of plastic in many personal care and cosmetic
          products such as sun cream and lipstick. These microplastics are so
          small that we cannot see them with the naked eye. Through our shower
          and sinks, they flow into sewage systems, slip through the filters in
          water treatment plants and reach our rivers and oceans. Once there,
          they become a part of the plastic soup. Marine animals mistake these
          microplastics for food. These particles also end up on our plates
          because we are part of the food chain.
        </li>
        <li style={{ padding: "1em" }}>
          The Plastic Soup Foundation just released the free Beat the Microbead
          app today which reads the ingredient lists on the packaging and
          recognizes more than 500 different types of microplastics. The user
          can immediately see whether the scanned product contains microplastics
          and, if so, which
        </li>
      </ul>
      <div className="wasteful_div5">
        <h1> Polution facts</h1>
      </div>
      <div>
        <ul className="wasteful_div6">
          <li style={{ padding: "1em" }}>
            You see it every time that smoke billows from your car's exhaust
            pipe, so there's no denying that vehicles are major contributors to
            air pollution. Air pollution refers to the presence of foreign
            substances in the air that don’t belong there, or excessive amounts
            of certain impurities that wouldn't harm us otherwise. When cars
            burn gasoline, they emit pollutants. Gasoline fumes escape into the
            air even when we pump gasoline into our fuel tanks.
          </li>
          <li style={{ padding: "1em" }}>
            Cars consume a lot of energy before they ever make it to the open
            road. Automotive production leaves a giant footprint because
            materials like steel, rubber, glass, plastics, paints, and many more
            must be created before a new ride is ready to roll.
          </li>
        </ul>
      </div>
      <div
        onMouseEnter={() => {
          set_viewSources(true);
        }}
        onMouseLeave={() => {
          set_viewSources(false);
        }}
        style={{ display: "flex", padding: "5rem" }}
      >
        <div style={{ width: 250, height: 50, textAlign: "center" }}>
          {viewSources ? (
            <div>
              <a
                href="https://www.worlddata.info/average-income.php"
                target="_blank"
                rel="noreferrer"
                style={{ cursor: "pointer" }}
              >
                average income per country
              </a>
              <br />
              <a
                href="https://news.gallup.com/poll/166211/worldwide-median-household-income-000.aspx"
                target="_blank"
                rel="noreferrer"
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
  );
}

export default WasteInfo;
