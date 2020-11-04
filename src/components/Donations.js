import React, { useState } from "react";

function Donations(props) {
  return (
    <div>
      {props.images.map((image) => {
        return <img src={image} alt="who" />;
      })}
   </div>
  );
}

export default Donations;
