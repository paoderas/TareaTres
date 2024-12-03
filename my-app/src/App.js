// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importar BrowserRouter correctamente
import Navbar from "./views/partials/Navbar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Catalogo from "./views/Catalogo";
import AboutUs from "./views/AboutUs";
import Footer from "./views/partials/Footer"; // No necesitas una ruta para Footer, lo agregamos fuera de Routes
import RegisterProduct from "./views/RegisterProduct";
import ModalEditProduct from "./Components/ModalEditProduct";


function App() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Usamos todo en minúsculas */}
        <Route path="/contact" element={<Contact />} />  {/* Asegúrate de que la ruta sea en minúsculas */}
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/register-product" element={<RegisterProduct />} />   {/* Consistencia en minúsculas */}
      </Routes>
      <Footer /> {/* El Footer se incluye fuera de las rutas */}
    </Router>
  );
}

export default App;





