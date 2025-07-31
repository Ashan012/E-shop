import React from "react";
import "./Brand.css";
import { brandImg } from "../../assets/assets";

const Brand = () => {
  return (
    <div className="Brand-container">
      <img src={brandImg.br1} alt="" />
      <img src={brandImg.br2} alt="" />
      <img src={brandImg.br3} alt="" />
      <img src={brandImg.br4} alt="" />
      <img src={brandImg.br5} alt="" />
    </div>
  );
};

export default Brand;
