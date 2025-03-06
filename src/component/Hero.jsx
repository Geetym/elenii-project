import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="right w-1/2 p-6"
      >
        <p className="text-3xl font-bold">Welcome to Elenii</p>
        <p className="text-lg mt-2">
          Elenii project is a solution provider to local problems.
        </p>
      </motion.div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="left w-1/2 p-6"
      >
        <img 
          src="https://www.elenii.xyz/_next/static/media/lp.7985e175.webp" 
          alt="Elenii" 
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Hero;