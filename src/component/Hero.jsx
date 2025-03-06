import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 py-16 bg-gray-100">
      {/* Left Side (Text) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Elenii
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Elenii project is a solution provider to local problems.
        </p>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://www.elenii.xyz/_next/static/media/lp.7985e175.webp"
          alt="Elenii Project"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
