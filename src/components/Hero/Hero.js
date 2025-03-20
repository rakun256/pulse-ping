import React from "react";
import "./Hero.css";
import hero from "../../assets/hero6.png";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-image-div">
        <div class="overlay"></div>
        <img alt="hero-image" className="hero-image" src={hero} />
        <div className="hero-container-inside-left">
          <h1 className="hero-title">Welcome to PulsePing</h1>
          <h2 className="hero-subtitle">
            Stay ahead of outages, make your API stay awake.
          </h2>
        </div>
        <div className="hero-container-inside-right">
          <a href="/dashboard">
            Go to dashboard.
            <FontAwesomeIcon icon={faGaugeHigh} className="hero-button-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
