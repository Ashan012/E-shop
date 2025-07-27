import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Hero />
        <Category />
      </div>
    </>
  );
}

export default App;
