import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for mobile menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-900 to-purple-800 shadow-xl py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 z-50 font-sans">
      {/* Brand/Logo */}
      <Link to="/" className="text-3xl font-extrabold text-white tracking-wider hover:text-gray-200 transition-colors duration-300">
        <span className="text-indigo-400">Digi</span>Boost
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full after:animate-underline-expand"
                : "text-gray-300 hover:text-white transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:rounded-full hover:after:w-full after:transition-all after:duration-300"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Navigation (Overlay) */}
      {isOpen && (
        <div className="fixed inset-0 bg-indigo-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 md:hidden z-40 animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={toggleMenu} // Close menu on link click
              className={({ isActive }) =>
                isActive
                  ? "text-white text-3xl font-bold border-b-2 border-white pb-2"
                  : "text-gray-300 hover:text-white text-3xl font-bold transition-colors duration-300"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
