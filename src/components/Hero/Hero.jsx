import React from "react";
import "./Hero.css";
import { assetsImg } from "../../assets/assets";
import Button from "../Button/Button";

const Hero = () => {
  const handleScrollBehaviour = () => {
    const section = document.getElementById("category");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Hero">
      <div className="hero-left">
        <h3>Beats Solo</h3>
        <h2> Wireless</h2>
        <h1>HEADPHONE</h1>
        <Button text={"Shop By Category"} func={handleScrollBehaviour} />
      </div>
      <div className="hero-right">
        <img src={assetsImg.headphone} alt="" />
      </div>
    </div>
  );
};

export default Hero;
