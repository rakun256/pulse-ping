import React from "react";
import "./FeaturesOverview.css";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe,faBoltLightning,faChartSimple,faLock,faGears,faCloud } from "@fortawesome/free-solid-svg-icons";

const FeaturesOverview = () => {
  return (
    <div className="features-container">
      <div className="features-title">
        <h1>Features</h1>
      </div>
      <div className="features-card-grid">
        <Card
          title="Real-Time Ping Monitoring"
          description="Monitor your URLs in real-time with automated checks at regular intervals. Stay informed about the availability of your websites and services."
          icon={<FontAwesomeIcon icon={faGlobe} />}
        />
        <Card
          title="Fast & Easy to Use"
          description="Easily add URLs and track their status through our simple and intuitive interface. No complex configurations required!"
          icon={<FontAwesomeIcon icon={faBoltLightning} />}
        />
        <Card
          title="Status History & Analytics"
          description="View the uptime history of your URLs, analyze downtime periods, and optimize performance accordingly."
          icon={<FontAwesomeIcon icon={faChartSimple} />}
        />
        <Card
          title="Secure Firebase Authentication"
          description="Keep your monitoring data secure with Firebase authentication. Sign in with Google or email to access your personal ping list anytime."
          icon={<FontAwesomeIcon icon={faLock} />}
        />
        <Card
          title="Customizable Controls"
          description="Adjust ping frequency, alert thresholds, and notification preferences to suit your needs. Take full control of your monitoring settings."
          icon={<FontAwesomeIcon icon={faGears} />}
        />
        <Card
          title="Cloud-Based & Mobile-Friendly"
          description="Access your monitored URLs from any device. The web app is optimized for mobile browsers, tablets, and desktops."
          icon={<FontAwesomeIcon icon={faCloud} />}
        />
      </div>
    </div>
  );
};

export default FeaturesOverview;
