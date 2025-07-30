import React from "react";
import "./SaleContainer.css";
import { assets } from "../../assets/assets";
import Button from "../Button/Button";

const SaleContainer = ({ text1, text2, img, bg }) => {
  return (
    <div className="Sale-Container" style={{ backgroundColor: bg }}>
      <div className="container-left">
        <p>30% OFF</p>
        <h1>{text1}</h1>
        <p>10 Jan to 8 Jan</p>
      </div>
      <div className="container-img">
        <img src={img || assets.headphone} alt="" />
      </div>
      <div className="container-right">
        <p> {text2}</p>
        <h1>Winter Sale</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis
        </p>
        <Button text={"Browse"} bg={"white"} color={bg || "#f42c37"} />
      </div>
    </div>
  );
};

export default SaleContainer;
