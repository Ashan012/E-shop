import React from "react";
import "./Footer.css";
import { assetsImg } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-container">
        <h1 className="logo">ESHOP</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          officiis. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <div className="links">
          <img src={assetsImg.facebook} alt="" />
          <img src={assetsImg.linkedin} alt="" />
          <img src={assetsImg.twitter} alt="" />
        </div>
      </div>
      <div className="center-container">
        <h1>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="right-container">
        <h1>Get in Touch</h1>
        <p>eshop@gmail.com</p>
        <p>+92 300319089</p>
      </div>
    </div>
  );
};

export default Footer;
