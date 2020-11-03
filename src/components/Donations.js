import React, { useState } from "react";
import "../donations.css";

function Donations(props) {
  const [slide, setSlide] = useState(0);
  const images = props.images.map((image) => {
    return image;
  });

  console.log(images);
  return (
    <div className="charityList">
      <div className="charities">
        {props.images.map((image) => {
          return <img src={image} alt="who" />;
        })}
      </div>
    </div>
  );
}

export default Donations;
