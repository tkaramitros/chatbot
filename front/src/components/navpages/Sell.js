import React from "react";
import Navbar from "../Navbar";
import "./Sell.css";
import Card from "../Card";

const Sell = () => {
  return (
    <>
      <div className="containerfluid">
        <div className="main-container">
          <Navbar />

          <div className="container container__card">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sell;
