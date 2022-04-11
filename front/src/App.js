import { Route } from "react-router";
import { Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
