import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Empower = () => {
  return (
    <section className="bg-[#E8ECF0] text-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-900">Eleni</span> | Empowering Change
          </h2>
          <p className="text-xl font-semibold mt-4">
            Education. Equality. Environment. Energy.
          </p>
          <p className="mt-4 text-gray-600">
            We’re building a future powered by technology to address the world’s
            most pressing issues. Discover how you can contribute.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
            Discover more
          </button>

          {/* Social Media Icons */}
          {/* <div className="flex gap-4 mt-6 text-blue-600">
            <FaFacebookF className="text-xl hover:text-blue-800 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-blue-800 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-blue-800 cursor-pointer" />
          </div> */}
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/3">
          <img
            src="https://www.elenii.xyz/_next/image?url=%2Fimages%2Feleni%2F5.webp&w=750&q=75" // Replace with actual image path
            alt="Eleni Project"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Footer Text */}
      <div className="bg-[#0A4182] text-center text-white py-6 mt-12">
        <p>
          Empowerment, equality, and a thriving planet: solutions for a future
          we all deserve..
        </p>
      </div>
    </section>
  );
};

export default Empower;
