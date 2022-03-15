import React from "react";
import { Link } from "react-router-dom";

import "./AirlineItem.scss";

const AirlineItem = (props) => {
  return (
    Object.keys(props).length !== 0 && (
      <div className="airline-item-container">
        <Link to={`/details/${props.id}`}>
          <li className="airline-item">
            <div className="airline-item-img-container">
              <img
                className="airline-item-img"
                src={`https://www.kayak.com${props.img}`}
                alt="Airline logo"
              />
            </div>

            <div className="airline-item-info-container">
              <span className="airline-item-info-name">{props.name}</span>
            </div>
          </li>
        </Link>
      </div>
    )
  );
};

export default AirlineItem;
