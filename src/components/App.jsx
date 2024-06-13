import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Header from "./Header";
import Hebergement from "../pages/Hebergement";
import ErrorHTTP from "../pages/ErrorHTTP";
import Footer from "./Footer";


const App = () => {
  return (
    
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hebergement" element={<Hebergement />} />
        
        <Route path="*" element={<ErrorHTTP />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
