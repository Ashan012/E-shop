import React from "react";
import "./Hero.css";
import { assetsImg } from "../../assets/assets";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h3>Beats Solo</h3>
        <h2> Wireless</h2>
        <h1>HEADPHONE</h1>
        <Button text={"Shop By Category"} />
      </div>
      <div className="hero-right">
        <img src={assetsImg.headphone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
