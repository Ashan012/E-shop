import React from "react";
import { assetsImg } from "../../assets/assets";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <Link to="/">
          <h2>ESHOP</h2>
        </Link>
      </div>

      <div className="links">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="features">
        <img src={assetsImg.search} alt="" />
        <Link to="/cart">
          <div className="dot"></div>
          <img src={assetsImg.basket} alt="" />
        </Link>
        <Button text={"SignUp"} />
      </div>
    </div>
  );
};

export default Navbar;
