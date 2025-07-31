import React, { useContext } from "react";
import "./ProductCart.css";
import { productDetails } from "../../assets/assets";
import { StoreContext } from "../../context/storeContext";

const ProductCart = () => {
  const { category } = useContext(StoreContext);
  return (
    <div className="Product-Sec" id="Product-Sec">
      <div className="heading">
        <h1>Our Products</h1>
        <p>Explore Our Products</p>
      </div>
      <div className="product-container">
        {productDetails.map((item, index) => {
          if (category === "All" || category === item.productCategory) {
            return (
              <div key={index} className="cart">
                <img src={item.img} alt="" />
                <div className="heading">
                  <h2 className="name">{item.name}</h2>
                  <h2 className="price">${item.price}</h2>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductCart;
