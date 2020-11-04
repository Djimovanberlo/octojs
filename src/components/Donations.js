import React, { useState } from "react";

function Donations(props) {
  return (
    <>
      {props.images.map((image) => {
        return <img src={image} alt="who" />;
      })}
    </>
  );
}

export default Donations;
