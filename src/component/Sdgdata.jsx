import React from 'react';

const SdgData = () => {
  return (
    <div className="w-full bg-slate-600 text-white py-8 px-6 md:px-12 flex flex-col md:flex-row items-center">
      {/* Left Side - Title */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold uppercase">
          SDG Data Alliance Today
        </h1>
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 text-center md:text-left mt-4 md:mt-0">
        <p className="text-lg leading-relaxed">
          Today, the SDG Data Alliance has evolved to become an open, 
          community-driven, multi-stakeholder partnership bringing 
          geographic information systems, or GIS, technology and 
          capabilities to developing nations around the world.
        </p>
      </div>
    </div>
  );
};

export default SdgData;
