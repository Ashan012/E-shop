import React, { useContext } from "react";
import "./cartTotal.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

const CartTotal = () => {
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <div className="CartTotal">
      <h2>Cart Total</h2>
      <div className="subTotal">
        <p>Subtotal</p>
        <p>${getTotalAmount()}</p>
      </div>
      <hr />
      <div className="deliveryFees">
        <p>Delivery Fees</p>
        <p>${getTotalAmount() == 0 ? 0 : 2}</p>
      </div>
      <hr />
      <div className="total">
        <p>Total</p>
        <p>${getTotalAmount() == 0 ? 0 : getTotalAmount() + 2}</p>
      </div>
      <Link to={"/order"}>
        <Button text={"Procced To Checkout"} />
      </Link>
    </div>
  );
};

export default CartTotal;
