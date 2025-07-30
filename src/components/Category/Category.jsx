import React from "react";
import "./Category.css";
import { assets } from "../../assets/assets";
import { category } from "../../assets/assets";
import Button from "../Button/Button";

const Category = () => {
  return (
    <div className="Category-container">
      {category.map((item, index) => {
        return (
          <div
            key={index}
            className="category"
            style={{ backgroundColor: item.color }}
          >
            <div className="category-left">
              <p className="p-1">Enjoy</p>
              <p className="p-2"> With</p>
              <p className="p-3">{item.name}</p>
              <Button text={"Browse"} color={item.color} bg={"white"} />
            </div>
            <div className="category-right">
              <img src={item.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
