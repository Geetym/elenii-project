import React from 'react';

const SdgData = () => {
  return (
    <div className="w-full bg-slate-600 text-white py-4 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center min-h-[20vh]">
      {/* Left Side - Title */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-bold uppercase">
          SDG Data Alliance Today
        </h1>
      </div>

      {/* Right Side - Description */}
      <div className="md:w-1/2 text-center md:text-left mt-2 md:mt-0">
        <p className="text-sm md:text-lg leading-relaxed">
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
