import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Hero = () => {
  return (
    <div
      className="w-full px-6 md:px-12 py-16 min-h-[50vh] md:h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('https://htmlbeans.com/html/botanical/images/b-bg.jpg')" }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
            {/* Right Side (Image on Mobile) */}
            <div className="md:w-1/2 flex justify-center relative">
              <img
                src="https://www.elenii.xyz/_next/static/media/lp.7985e175.webp"
                alt="Elenii Project"
                className="w-4/5 max-w-xs md:max-w-lg rounded-lg shadow-lg animate-fadeIn"
              />
            </div>

            {/* Left Side (Text & Socials) */}
            <div className="md:w-1/2 text-center md:text-left bg-white bg-opacity-90 p-6 rounded-lg shadow-lg animate-slideIn">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 italic">
                Welcome to 
                <span className="underline font-black relative"> Elenii
                  <span className='absolute -right-4 top-1/4 transform -translate-y-1/3 flex size-3'>
                    <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
                    <span className='relative inline-flex size-3 rounded-full bg-sky-500'></span>
                  </span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
                Elenii project is a solution provider to local problems.
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="/" className="hover:text-gray-700 text-[#0A4182] text-2xl transition-transform transform hover:scale-110"><FaFacebookF /></a>
                <a href="/" className="hover:text-gray-700 text-blue-400 text-2xl transition-transform transform hover:scale-110"><FaTwitter /></a>
                <a href="/" className="hover:text-gray-700 text-pink-500 text-2xl transition-transform transform hover:scale-110"><FaInstagram /></a>
                <a href="/" className="hover:text-gray-700 text-blue-700 text-2xl transition-transform transform hover:scale-110"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
