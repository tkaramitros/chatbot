import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { SliderData } from "./SliderData";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Items from "./pages/Items";

function App() {
  return (
    <Router>
      <Header slides={SliderData} />
      <SearchBar />
      <Footer />
      <Routes>
        <Route path="/items" element={<Items />} />
      </Routes>
    </Router>
=======
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header slides={SliderData} />
      <SearchBar />
      <Footer />
    </>
>>>>>>> c7f7e90fbd58e1b98ca76e6a06163871a0c5ac22
  );
}

export default App;
