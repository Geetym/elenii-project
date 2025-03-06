import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://www.elenii.xyz/_next/image?url=%2Fimages%2Feleni%2F1.webp&w=640&q=75"
          alt="Elenii"
          className="w-10 h-10"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 text-gray-700">
        <a href="/" className="hover:text-blue-600">About</a>
        <a href="/" className="hover:text-blue-600">Partnership</a>
        <a href="/" className="hover:text-blue-600">Services</a>
      </div>

      {/* Login Button (Always Visible) */}
      <div className="hidden md:block">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col items-center gap-4 md:hidden">
          <a href="/" className="hover:text-blue-600">About</a>
          <a href="/" className="hover:text-blue-600">Partnership</a>
          <a href="/" className="hover:text-blue-600">Services</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
