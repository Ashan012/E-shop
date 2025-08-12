import React from "react";
import "./Button.css";

const Button = ({ text, color, bg, func }) => {
  return (
    <button
      onClick={func}
      className="btn"
      style={{ color: color, backgroundColor: bg }}
    >
      {text}
    </button>
  );
};

export default Button;
