import React from "react";
import "../styles/Donations.css";

function Donations(props) {
  return (
    <div>
      {props.charities.map((charity) => {
        return (
          <>
            <a href={charity.donateLink} key={charity.name}>
              <img src={charity.image} alt={""} />
            </a>
          </>
        );
      })}
    </div>
  );
}

export default Donations;
