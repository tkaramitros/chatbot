import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { SliderData } from "./SliderData";
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
  );
}

export default App;
