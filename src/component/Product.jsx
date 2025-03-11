import React from 'react';

const products = [
  {
    id: 1,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid",
    title: "Quality Education",
    description:
      "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all. Education is the key to breaking the cycle of poverty and fostering sustainable development.",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid",
    title: "Gender Equality",
    description:
      "Achieving gender equality and empowering all women and girls. Equality is not just a fundamental human right but a necessary foundation for a peaceful, prosperous, and sustainable world.",
  },
  {
    id: 3,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid",
    title: "Global Climate Action",
    description:
      "Taking urgent action to combat climate change and its impacts. Climate change is a global challenge that requires immediate and collective efforts to protect our planet.",
  },
  {
    id: 4,
    image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid",
    title: "Clean and Renewable Energy",
    description:
      "Ensuring access to affordable, reliable, sustainable, and modern energy for all. Renewable energy is the future of a sustainable and resilient economy.",
  },
];

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:bg-blue-200  hover:shadow-black border-y-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid";
        }}
      />
      <div className="p-4 text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-[#372506] text-sm font-extralight mt-1">{description}</p>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-700">
          WHAT WE IMPACT
        </h2>
        <p className="text-[#0A4182] mt-2 text-lg italic font-extralight border-y-4">
          Browse through our focus goals and see which is best for you.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
