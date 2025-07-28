import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons
import { Link } from "react-router-dom"; // Import Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-12 font-sans">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center md:text-left">

        {/* Brand Info */}
        <div className="col-span-full md:col-span-1">
          <Link to="/" className="text-4xl font-extrabold text-white tracking-wider mb-4 inline-block">
            <span className="text-indigo-400">Digi</span>Boost
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Your trusted partner in digital marketing, driving growth and maximizing your online presence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-indigo-300 mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">About Us</Link></li>
            <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Services</Link></li>
            <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Blog</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-xl font-bold text-indigo-300 mb-6">Our Services</h3>
          <ul className="space-y-3">
            <li><Link to="/services/seo" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">SEO Optimization</Link></li>
            <li><Link to="/services/social-media" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Social Media Marketing</Link></li>
            <li><Link to="/services/email-marketing" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Email Campaigns</Link></li>
            <li><Link to="/services/ppc" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Paid Advertising</Link></li>
            <li><Link to="/services/web-design" className="text-gray-300 hover:text-white transition-colors duration-300 text-base">Web Design</Link></li>
          </ul>
        </div>

        {/* Contact Info & Social Media */}
        <div>
          <h3 className="text-xl font-bold text-indigo-300 mb-6">Connect With Us</h3>
          <p className="text-gray-300 text-base mb-4">
            123 Digital Street, Suite 456<br/>
            Marketing City, DM 78901<br/>
            USA
          </p>
          <p className="text-gray-300 text-base mb-4">
            Email: <a href="mailto:info@digiboost.com" className="hover:text-white transition-colors duration-300">info@digiboost.com</a><br/>
            Phone: <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
          </p>
          <div className="flex justify-center md:justify-start space-x-5 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transform hover:scale-110 transition-transform duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-8 text-center px-6">
        <p className="text-sm text-gray-400 opacity-90">
          &copy; {new Date().getFullYear()} <span className="font-semibold text-white">DigiBoost Agency</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-400 opacity-75">
          Made with <span className="text-red-500">❤️</span> by <span className="font-semibold">Noor Fatima</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
