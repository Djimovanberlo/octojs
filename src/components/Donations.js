import React from "react";
import "../styles/Donations.css";

function Donations(props) {
  // const [description, setDescription] = useState(false);
  // const [name, setName] = useState();

  // const showText = (name) => {
  //   setDescription(true);
  //   setName(name);
  //   console.log(name);
  // };

  // const hideText = () => {
  //   setDescription(false);
  //   console.log("HA");
  // };

  return (
    <div>
      {props.charities.map((charity) => {
        return (
          <>
            <a
              href={charity.donateLink}
              // onMouseEnter={() => showText(charity.name)}
              // onMouseLeave={hideText}
              key={charity.name}
            >
              <img src={charity.image} />
            </a>
            {/* <p>hallo</p> */}
          </>
        );
      })}
    </div>
  );
}

export default Donations;
