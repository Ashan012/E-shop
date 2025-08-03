import React from "react";
import "./promocode.css";

const PromoCode = () => {
  return (
    <div className="promo-code">
      <p>If you have a promocode enter here</p>
      <input type="text" placeholder="Enter Your PromoCode" />
      <button>Submit</button>
    </div>
  );
};

export default PromoCode;
