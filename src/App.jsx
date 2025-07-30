import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import SaleContainer from "./components/Sale Container/SaleContainer";
import ProductCart from "./components/ProductCart/ProductCart";
import { assets } from "./assets/assets";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <Category />
        <SaleContainer text1={"Fine Smile"} text2={"Air Solo Bass"} />
        <ProductCart />
        <SaleContainer
          bg={"#2DCC6F"}
          img={assets.smartWatch}
          text1={"HAPPY HOURS"}
        />
      </div>
    </>
  );
}

export default App;
