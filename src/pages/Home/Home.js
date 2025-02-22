import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import FeaturesOverview from "../../components/FeaturesOverview/FeaturesOverview";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesOverview />
      <Footer />
    </div>
  );
};

export default Home;
