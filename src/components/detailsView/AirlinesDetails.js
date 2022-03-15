import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import "./AirlinesDetails.scss";

import CheckFlights from "./CheckFlights";

const AirlineDetails = (props) => {
  const [airlineDetails, serAirlineDetails] = useState([]);
  useEffect(() => {
    let airlineDetails = props.airline.data.find(
      (item) => item.code === props.id
    );
    serAirlineDetails(airlineDetails);
  }, []);
  console.log(airlineDetails);
  return Object.keys(airlineDetails).length !== 0 ? (
    <>
      <div className="details">
        <Link to={`/`}>
          <span>&lt; Back to list</span>
        </Link>
        <div className="airline-details-container">
          <div className="airline-details">
            <h4 className="name">{airlineDetails.name}</h4>
            <h4>{airlineDetails.phone}</h4>
            <h4>
              <a href={`${airlineDetails.site}`} target="_blank">
                {airlineDetails.site}
              </a>
            </h4>
          </div>
          <img src={`https://www.kayak.com${airlineDetails.logoURL}`} />
        </div>
      </div>
      <CheckFlights id={airlineDetails.code} />
    </>
  ) : null;
};

const mapStateToProps = (state) => ({ airline: state.airline });

export default connect(mapStateToProps)(AirlineDetails);
