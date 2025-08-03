import React from "react";
import "./OrderForm.css";

const OrderForm = () => {
  return (
    <div className="OrderForm">
      <div className="title">
        <h3>Delivery Information</h3>
      </div>
      <div className="inputBox">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="email" placeholder="Email Address" />
      <input type="text" placeholder="Street" />
      <div className="inputBox">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
      </div>
      <div className="inputBox">
        <input type="text" placeholder="Zip Code" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="Phone" placeholder="Phone" />
    </div>
  );
};

export default OrderForm;
