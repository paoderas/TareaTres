import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold">
              MyWebsite
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>  {/* Ruta con minúsculas */}
        <Link to="/contact">Contact</Link> {/* Ruta con minúsculas */}
        <Link to="/catalogo">Catalogo</Link>
        <Link to="/register-product">Register Product</Link>
          {/* Ruta con minúsculas */}
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

