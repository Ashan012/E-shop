import React, { useContext } from "react";
import "./cart.css";
import DisplayCartItem from "../../components/DisplayCartItem/DisplayCartItem";
import CartTotal from "../../components/CartTotal/CartTotal";
import PromoCode from "../../components/PromoCode/PromoCode";

const Cart = () => {
  return (
    <div className="cart">
      <DisplayCartItem />
      <div className="cartBottom">
        <CartTotal />
        <PromoCode />
      </div>
    </div>
  );
};

export default Cart;
