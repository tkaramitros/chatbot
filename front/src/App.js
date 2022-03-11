import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="check">
        <form action="post" method="post" className="form">
          <button class="btn btn-outline-primary" type="submit">
            Connected?
          </button>
        </form>
        <form action="hello" method="post" className="form">
          <button class="btn btn-outline-success" type="submit">
            Hello!!
          </button>
        </form>
      </div>
      <SearchBar />
      <Footer />
    </>
  );
}

export default App;
