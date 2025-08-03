import React from "react";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import SaleContainer from "../components/Sale Container/SaleContainer";
import ProductCart from "../components/ProductCart/ProductCart";
import Brand from "../components/Brand/Brand";
import { assetsImg } from "../assets/assets";

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <SaleContainer text1={"Fine Smile"} text2={"Air Solo Bass"} />
      <ProductCart />
      <SaleContainer
        bg={"#2DCC6F"}
        img={assetsImg.smartWatch}
        text1={"HAPPY HOURS"}
      />
      <Brand />
    </>
  );
};

export default Home;
