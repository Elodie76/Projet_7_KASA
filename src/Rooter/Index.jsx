import {  Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logements from "../pages/Logements";
import ErrorHTTP from "../pages/ErrorHTTP";



const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="logement/:id" element={<Logements />} />   
          <Route path="*" element={<ErrorHTTP />} />     
        </Routes>
  );
};

export default Router;
