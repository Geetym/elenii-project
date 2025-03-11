import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center w-full px-6 md:px-12 py-16 min-h-[50vh] md:h-screen bg-gray-100 bg-cover bg-center gap-6 md:gap-12"
      style={{ backgroundImage: "url('https://htmlbeans.com/html/botanical/images/b-bg.jpg')" }}
    >
      {/* Left Side (Text & Socials) */}
      <div className="md:w-1/2 text-center md:text-left bg-opacity-80 p-6 rounded-lg animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-6 italic">
          Welcome to Elenii
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-6 animate-slideIn">
          A solution provider to local problems.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="/" className="hover:text-gray-700 text-[#0A4182] text-2xl transition-transform transform hover:scale-110"><FaFacebookF /></a>
          <a href="/" className="hover:text-gray-700 text-blue-400 text-2xl transition-transform transform hover:scale-110"><FaTwitter /></a>
          <a href="/" className="hover:text-gray-700 text-pink-500 text-2xl transition-transform transform hover:scale-110"><FaInstagram /></a>
          <a href="/" className="hover:text-gray-700 text-blue-700 text-2xl transition-transform transform hover:scale-110"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 flex justify-center relative animate-bounce md:animate-none">
        <img
          src="https://www.elenii.xyz/_next/static/media/lp.7985e175.webp"
          alt="Elenii Project"
          className="w-4/5 max-w-xs md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
