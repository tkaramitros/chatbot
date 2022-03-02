import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearcBar from "./components/SearcBar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SearcBar />
      <Footer />

      <form action="post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>

         <form action="hello" method="post" 
              className="form">
          <button type="submit">Hello!!</button>
        </form>
    </>
  );
}

export default App;
