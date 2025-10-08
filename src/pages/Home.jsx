import React from "react";
import { Button, Carousel, CategoryCard, FeaturesSection, Loader, NewsletterSection, ProductCard } from "../components";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router";

function Home() {

  const navigate = useNavigate()
  const {data,loading, error} = useFetch("/products?offset=10&limit=4");
  const {data : categories} = useFetch("/categories");
  if(loading) return <div className="min-h-screen flex justify-center items-center"><Loader/></div>;
  if(error) return <p>Error: {error}</p>;
  console.log(data);
  return (
    <div>
      <div className="grid gird-rows-1 md:grid-cols-2 gap-2 p-4">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold text-black dark:text-white ">
            Sale at Carty
          </h1>
          <p className="text-xl text-black dark:text-white opacity-50">
            Up to 50% off on selected Items
          </p>
        </div>
        <Carousel products={data}/>
      </div>
      <FeaturesSection />
      <div className="flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold text-black dark:text-white p-4">
          Categories
        </h1>
        <Button value={"See more"} onClick={() => {navigate("/categories")}} />
      </div>
      <div className="flex justify-center flex-wrap gap-4 p-2">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold text-black dark:text-white p-4">
          Popular Products
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {data.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <NewsletterSection />
    </div>
  );
}

export default Home;
