import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h3>Beats Solo</h3>
        <h2> Wireless</h2>
        <h1>HEADPHONE</h1>
        <button>Shop by Category</button>
      </div>
      <div className="hero-right">
        <img src={assets.headphone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
