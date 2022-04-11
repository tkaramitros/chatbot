import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sell from "./components/navpages/Sell";
import Home from "./components/navpages/Home";
import Rent from "./components/navpages/Rent";
import Login from "./components/navpages/Login";
import SignUp from "./components/navpages/SignUp";
import "./App.css";


function App() {
  return (
    
    <Router>
      <Routes>
       <Route exact path="/"  element={<Home/>} />
       <Route path="/sell" element={<Sell/>} />
       <Route path="/rent" element={<Rent/>} />
       <Route path="/login" element ={<Login/>} />
       <Route path="/signup" element ={<SignUp/>} />
      </Routes>
      
      <Footer />
    </Router>
    
  );
}

export default App;