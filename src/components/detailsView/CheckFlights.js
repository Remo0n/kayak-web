import React, { useState, useEffect } from "react";

import "./CheckFlights.scss";

const CheckFlights = (props) => {
  const [checkTerm, setCheckTerm] = useState("");

  const handleCheckFlight = (e) => {
    if (e) {
      setCheckTerm(e.target.value);
    }
  };

  const routeChange = () => {
    let path = `https://www.kayak.com/tracker/${props.id}-${checkTerm}`;
    window.open(path, "_blank");
  };

  useEffect(() => {
    handleCheckFlight();
  }, []);
  console.log(checkTerm);
  return (
    <div className="check-flight-container">
      <h3>Check flight status</h3>
      <div className="check-flight">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Enter flight number ..."
          value={checkTerm}
          onChange={(e) => handleCheckFlight(e)}
        />
        <button onClick={routeChange}>Check</button>
      </div>
    </div>
  );
};

export default CheckFlights;
