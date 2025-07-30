import React from "react";
import "./ProductCart.css";
import { product } from "../../assets/assets";

const ProductCart = () => {
  return (
    <div>
      <div className="heading">
        <h1>Our Products</h1>
        <p>Explore Our Products</p>
      </div>
      <div className="product-container">
        {product.map((item, index) => {
          return (
            <div key={index} className="cart">
              <img src={item.img} alt="" />
              <div className="heading">
                <h2 className="name">{item.name}</h2>
                <h2 className="price">${item.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCart;
