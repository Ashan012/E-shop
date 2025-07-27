import React from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">ESHOP</div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="features">
        <img src={assets.basket} alt="" />
        <img src={assets.search} alt="" />
        <button>SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
