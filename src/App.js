import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Products from "./components/Products";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Features />
      <Products />
      <Contactus />
      <Footer />
    </div>
  );
}

export default App;
