import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { SliderData } from "./SliderData";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Items from "./pages/Items";
import Chatbot from "./Chatbot/Chatbot";

function App() {
  return (
    <Router>
      <Header slides={SliderData} />
      <SearchBar />
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;
