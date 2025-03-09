import React from 'react'
const products = [
    {
      id: 1,
      image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid", // Quality Education
      title: "Quality Education",
      description:
        "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities for all. Education is the key to breaking the cycle of poverty and fostering sustainable development.",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid", // Gender Equality (Placeholder)
      title: "Gender Equality",
      description:
        "Achieving gender equality and empowering all women and girls. Equality is not just a fundamental human right but a necessary foundation for a peaceful, prosperous, and sustainable world.",
    },
    {
      id: 3,
      image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid", // Global Climate Action (Placeholder)
      title: "Global Climate Action",
      description:
        "Taking urgent action to combat climate change and its impacts. Climate change is a global challenge that requires immediate and collective efforts to protect our planet.",
    },
    {
      id: 4,
      image: "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid", // Clean & Renewable Energy (Placeholder)
      title: "Clean and Renewable Energy",
      description:
        "Ensuring access to affordable, reliable, sustainable, and modern energy for all. Renewable energy is the future of a sustainable and resilient economy.",
    },
  ];
  
  const ProductCard = ({ image, title, description }) => {
    console.log("Image URL:", image); // Debugging line
  
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?ga=GA1.1.238894924.1715341372&semt=ais_hybrid"; // Fallback image
          }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    );
  };
  
  const ProductSection = () => {
    return (
      <section className="py-12 px-6 bg-gray-100">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 ">
            WHAT WE <span className="text-red-600">IMPACT</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Browse through our focus goals and see which is best for you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductSection;
  