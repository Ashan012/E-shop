import React, { useContext } from "react";
import { productDetails } from "../../assets/assets";
import "./DisplayCart.css";
import { StoreContext } from "../../context/storeContext";

const DisplayCartItem = () => {
  const { cart, getTotalAmount } = useContext(StoreContext);

  return (
    <div className="cartDisplay">
      <div className="cart-item">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {productDetails.map((item, index) => {
        if (cart[item._id] > 0) {
          return (
            <div key={index}>
              <div className="cart-item cart-item-item">
                <img src={item.img} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cart[item._id]}</p>
                <p>${item.price * cart[item._id]}</p>
                <p className="cross">x</p>
              </div>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default DisplayCartItem;
