import React from "react";
import ReactDOM from "react-dom";

import { ReactComponent as Logo } from "../../assets/kayak-logo.svg";

import "./Navbar.scss";

const Navbar = () => {
  const navContent = (
    <nav className="nav-container">
      <div className="nav-logo">
        <span>
          <Logo className="logo" />
        </span>
      </div>
    </nav>
  );

  return ReactDOM.createPortal(
    navContent,
    document.getElementById("nav-portal")
  );
};

export default Navbar;
