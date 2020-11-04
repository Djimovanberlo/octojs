import React from "react";

function Donations(props) {
  return (
    <>
      {props.charities.map((charity) => {
        return (
          <a href={charity.donateLink} key={charity.name}>
            <img src={charity.image} />
          </a>
        );
      })}
   </>
  );
}

export default Donations;
