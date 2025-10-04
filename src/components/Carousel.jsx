import React, { useState, useEffect } from "react";

export default function Carousel() {
  const product = {
    id: 4,
    title: "Handmade Fresh Table",
    slug: "handmade-fresh-table",
    price: 687,
    description: "Andy shoes are designed to keeping in...",
    category: {
      id: 5,
      name: "Others",
      image: "https://placehold.co/600x400",
      slug: "others",
    },
    images: [
      "https://placehold.co/600x400/8a2be2/fff?text=Image+1",
      "https://placehold.co/600x400/ff6347/fff?text=Image+2",
      "https://placehold.co/600x400/20b2aa/fff?text=Image+3",
    ],
  };

  const [current, setCurrent] = useState(0);
  const length = product.images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
      {/* Image Wrapper */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        {product.images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={product.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
              <p className="text-lg font-medium mb-4">${product.price}</p>
              <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
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
        {product.images.map((_, index) => (
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
