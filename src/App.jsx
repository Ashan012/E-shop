import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
