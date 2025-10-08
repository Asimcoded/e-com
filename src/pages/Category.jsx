import React from "react";
import { CategoryCard, Loader, NewsletterSection } from "../components";
import useFetch from "../hooks/useFetch";

function Category() {
  const {data : categories,loading,error} = useFetch("/categories");
  if(loading) return <div className="min-h-screen flex justify-center items-center"><Loader/></div>;
  if(error) return <p>Error: {error}</p>;
  console.log(categories);
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold text-black dark:text-white p-4">
        Categories
      </h1>
      <p className="text-xl text-black dark:text-white opacity-50">
        Chose the category for the Products
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <NewsletterSection />
    </div>
  );
}

export default Category;
