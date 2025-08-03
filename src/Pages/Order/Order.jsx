import React from "react";
import CartTotal from "../../components/CartTotal/CartTotal";
import OrderForm from "../../components/Order Form/OrderForm";
import "./order.css";

const Order = () => {
  return (
    <div className="OrderPage">
      <OrderForm />
      <CartTotal />
    </div>
  );
};

export default Order;
