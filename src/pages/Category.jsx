import React from "react";
import { CategoryCard, NewsletterSection } from "../components";

function Category() {
  const samlpeCategories = [
    {
      id: 1,
      name: "Clothes",
      slug: "clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 3,
      name: "Furniture",
      slug: "furniture",
      image: "https://i.imgur.com/Qphac99.jpeg",
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 4,
      name: "Shoes",
      slug: "shoes",
      image: "https://i.imgur.com/qNOjJje.jpeg",
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 5,
      name: "Miscellaneous",
      slug: "miscellaneous",
      image: "https://i.imgur.com/BG8J0Fj.jpg",
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold text-black dark:text-white p-4">
        Categories
      </h1>
      <p className="text-xl text-black dark:text-white opacity-50">
        Chose the category for the Products
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {samlpeCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <NewsletterSection />
    </div>
  );
}

export default Category;
