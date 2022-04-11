import React from 'react';
import "./Home.css";
import Navbar from '../Navbar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from '../Header';
import SearchBar from '../SearchBar';
import { SliderData } from "../../SliderData";


const Home = () => {
  return (
    <>
    
    <Header slides={SliderData} />
    <SearchBar/>
    
    </>
  )
}

export default Home;