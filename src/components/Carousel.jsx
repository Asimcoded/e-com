import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Carousel({ products = [] }) {
  const [current, setCurrent] = useState(0);
  const length = products.length;
  
  useEffect(() => {
    if (length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  if (length === 0) {
    return <p className="text-center py-10 text-gray-500">No products found</p>;
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const currentProduct = products[current];

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Image Wrapper */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        {currentProduct.images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={currentProduct.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-2xl font-semibold mb-2">
            {currentProduct.title}
          </h2>
          <p className="text-lg font-medium mb-4">${currentProduct.price}</p>
          <Link to={`/product/${currentProduct.id}`} className="bg-white text-center text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Buy Now
          </Link>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2"
      >
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2"
      >
        <svg
          className="w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
