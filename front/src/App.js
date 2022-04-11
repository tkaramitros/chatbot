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

function App() {
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
        <Route path="/items/:urlFilter" element={<SearchBar />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
