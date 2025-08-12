import React, { useContext } from "react";
import "./Category.css";
import { categoryDetails } from "../../assets/assets";
import Button from "../Button/Button";
import { StoreContext } from "../../context/storeContext";

const Category = () => {
  const { category, setCategory } = useContext(StoreContext);

  return (
    <div className="Category-container" id="category">
      {categoryDetails.map((item, index) => {
        return (
          <div
            key={index}
            className="category"
            style={{ backgroundColor: item.color }}
            onClick={() => {
              setCategory(
                category == "All" || category !== item.name ? item.name : "All"
              );
              const section = document.getElementById("productSec");
              section.scrollIntoView({ behavior: "smooth" });
            }}
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
