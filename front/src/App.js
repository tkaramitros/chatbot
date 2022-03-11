import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { SliderData } from "./SliderData";

function App() {
  return (
    <>
      <Header slides={SliderData} />
      <SearchBar />
      <Footer />
    </>
  );
}

export default App;
