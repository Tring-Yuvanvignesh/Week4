import React from "react";
import "./landingnav.css";
import logo from '../../Images/logo.png'

const Landingnav = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
            <img src={logo} alt="logo"  />
      </div>
    </div>
  );
};

export default Landingnav;
