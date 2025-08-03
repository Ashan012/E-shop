import React from "react";
import "./cartTotal.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const CartTotal = () => {
  return (
    <div className="CartTotal">
      <h2>Cart Total</h2>
      <div className="subTotal">
        <p>Subtotal</p>
        <p>$100</p>
      </div>
      <hr />
      <div className="deliveryFees">
        <p>Delivery Fees</p>
        <p>$2</p>
      </div>
      <hr />
      <div className="total">
        <p>Total</p>
        <p>$2</p>
      </div>
      <Link to={"/order"}>
        <Button text={"Procced To Checkout"} />
      </Link>
    </div>
  );
};

export default CartTotal;
