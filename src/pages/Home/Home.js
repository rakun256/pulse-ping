import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeaturesOverview from "../../components/FeaturesOverview/FeaturesOverview";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="glow"></div>
      <div className="glow"></div>
      <div className="glow"></div>
      <div className="glow"></div>

      <Header />
      <Hero />
      <FeaturesOverview />
      <Footer />
    </div>
  );
};

export default Home;