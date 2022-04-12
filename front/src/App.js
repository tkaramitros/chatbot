import React, { useState } from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Sell from "./components/navpages/Sell";
import Rent from "./components/navpages/Rent";
import Login from "./components/navpages/Login";
import SignUp from "./components/navpages/SignUp";
import Dashboard from "./components/Dashboard";
import { SliderData } from "./SliderData";
import AdDetails from "./pages/AdDetails";

function App() {
  const [detailedAd, setDetailedAd] = useState({});

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <Header slides={SliderData} />
            </>
          }
        />
        <Route
          path="/items/:urlFilter"
          element={<SearchBar setDetailedAd={setDetailedAd} />}
        />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/details" element={<AdDetails ad={detailedAd} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
