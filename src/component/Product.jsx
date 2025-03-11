import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ Import Autoplay module
import 'swiper/css';

const products = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg",
    title: "Quality Education",
    description: "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all.",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg",
    title: "Gender Equality",
    description: "Achieving gender equality and empowering all women and girls.",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg",
    title: "Global Climate Action",
    description: "Taking urgent action to combat climate change and its impacts.",
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg",
    title: "Clean and Renewable Energy",
    description: "Ensuring access to affordable, reliable, sustainable, and modern energy for all.",
  },
];

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 md:hover:scale-105 md:hover:bg-blue-200 md:hover:shadow-black ">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-[#372506] text-sm font-extralight mt-1">{description}</p>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
          WHAT WE IMPACT
        </h2>
        <p className="text-[#0A4182] mt-2 text-lg italic font-extralight border-y-1">
          Browse through our focus goals and see which is best for you.
        </p>
      </div>

      {/* Swiper for Mobile, Grid for Desktop */}
      <div className="mt-8">
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Auto-slide every 3s
            loop={true} // ✅ Infinite loop
            modules={[Autoplay]} // ✅ Use autoplay module
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
