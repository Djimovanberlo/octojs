import React from "react";
import { NavLink } from "react-router-dom";

import Donations from "../components/Donations";
import "../donations.css";

function DonationsPage() {
  const images = [
    "https://affordableartfair.com/media/wysiwyg/whats-on/amsterdam/WarChild.jpg",
    "https://www.hearttoheart.org/wp-content/uploads/2014/06/HeartToHeart_APPICON_White-011.jpg",
    "https://charitywallet.nl/wp-content/uploads/2015/09/Unicef-Nederland-Logo-CharityWallet.jpg",
  ];

  return (
    <>
      <header>
        <div className="title">
          <h1>Donate </h1>
        </div>
        <div className="p-element">
          <p>to make the world a better place</p>
        </div>
      </header>
      <Donations images={images} />
      <div style={{ position: "absolute", top: 850, left: 200 }}>
        <NavLink to="/facts">Go back</NavLink>
        <br />
        <NavLink to="/">Do the thing again</NavLink>
      </div>
    </>
  );
}

export default DonationsPage;
