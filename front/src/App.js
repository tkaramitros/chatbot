import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { SliderData } from "./SliderData";

import Items from "./pages/Items";
import Chatbot from "./Chatbot/Chatbot";

function App() {
  return (
    <>
      <Header slides={SliderData} />
      <SearchBar />
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
