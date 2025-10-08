import React from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { ProductCard } from "../components";

function ResultPage() {
  const categoryName = useParams();
  console.log(categoryName);


  const { data: items, loading, error } = useFetch(`/categories/${categoryName.id}/products`);
  console.log(items);
  if (loading) return <Loader/>
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (items.length === 0) return <div className="min-h-screen flex justify-center items-center"><p className="text-center text-gray-500">No items found in this category.</p></div>;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 capitalize text-gray-800 dark:text-gray-100">
        {items[0].category.name} Items
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
export default ResultPage;
