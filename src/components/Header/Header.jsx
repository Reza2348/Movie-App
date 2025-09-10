import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/genre", label: "Genre" },
    { to: "/country", label: "Country" },
    { to: "/movies", label: "Movies" },
    { to: "/series", label: "Series" },
    { to: "/animation", label: "Animation" },
    { to: "/about us", label: "About Us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50 border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          Movie<span className="text-orange-400">App</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-red-500 after:transition-all ${
                location.pathname === link.to
                  ? "text-red-500 after:w-full"
                  : "text-white hover:text-red-500 after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-white text-black rounded-full px-4 py-2 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-red-500 shadow transition"
            />
            <FiSearch className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/login"
            className="text-white text-sm font-semibold hover:text-red-500 transition"
          >
            Login
          </Link>
          <span className="text-white">/</span>
          <Link
            to="/register"
            className="text-white text-sm font-semibold hover:text-red-500 transition"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-black border-t border-gray-700 text-center space-y-5 transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen
            ? "max-h-screen opacity-100 px-5 py-5"
            : "max-h-0 opacity-0 px-0 py-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setIsMenuOpen(false)}
            className={`block text-base font-medium transition-all duration-500 ${
              location.pathname === link.to
                ? "text-red-500"
                : "text-white hover:text-red-500"
            }`}
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile Search */}
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-white border rounded-full px-5 py-2 block w-full shadow transition focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Auth Buttons */}
        <Link
          to="/login"
          onClick={() => setIsMenuOpen(false)}
          className="block w-full px-5 py-2 border border-red-500 text-red-500 rounded-full text-sm font-semibold hover:bg-red-50 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          onClick={() => setIsMenuOpen(false)}
          className="block w-full px-5 py-2 border border-red-500 text-red-500 rounded-full text-sm font-semibold hover:bg-red-50 transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Header;
