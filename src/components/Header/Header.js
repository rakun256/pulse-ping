import React from "react";
import logo from "../../assets/PulsePing-Transparent-Logo.png";
import "./Header.css";
import { faUserPlus , faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="PulsePing logo" className="header-logo" />
        <h1 className="header-title">PulsePing</h1>
      </div>
      <div className="header-right">
        <a href="/login" className="header-login-button">
          Login
          <FontAwesomeIcon icon={faArrowRightToBracket} className="header-button-icon"/>
        </a>
        <a href="/signup" className="header-signup-button">
          Sign up
          <FontAwesomeIcon icon={faUserPlus} className="header-button-icon"/>
        </a>
      </div>
    </div>
  );
};

export default Header;
