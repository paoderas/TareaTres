import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import AboutUs from '../views/AboutUs';
import Navbar from '../views/partials/Navbar';
import Catalogo from '../views/Catalogo';
import Contact from '../views/Contact';

const Router = () => {
  return (
    <div>
      <Navbar /> {/* La navbar debe estar fuera de las rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Router;




