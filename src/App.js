import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./webpages/Home";
import About from "./webpages/About";
import Pictures from "./webpages/Pictures";
import Menu from "./webpages/Menu";
import logo from "./logo.svg";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="site-container">
        {" "}
        {/* Flex container */}
        <Menu />
        <div className="content-wrap">
          {" "}
          {/ * Innehåll, sträcks för att fylla utrymmet */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pictures" element={<Pictures />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
