import React from "react";
import Donations from "../components/Donations";
import "../donations.css";

function DonationsPage() {
  const images = [
    "https://affordableartfair.com/media/wysiwyg/whats-on/amsterdam/WarChild.jpg",
    "https://www.hearttoheart.org/wp-content/uploads/2014/06/HeartToHeart_APPICON_White-011.jpg",
    "https://humanityhouse.org/wp-content/uploads/2014/08/unicef-logo.jpg",
  ];

  return (
    <div className="donation_parent">
      <div></div>
      <div>
        <h1>Donate</h1>
        <p>and help the world</p>
      </div>
      <div></div>
      <Donations className="donation_div3" images={images} />
    </div>
  );
}

export default DonationsPage;
