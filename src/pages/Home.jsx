import React from "react";
import { Button, Carousel, CategoryCard, FeaturesSection, NewsletterSection, ProductCard } from "../components";

function Home() {
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
  const sampleProducts = [
    {
      id: 33,
      title: "Modern Minimalist Workstation Setup",
      slug: "modern-minimalist-workstation-setup",
      price: 49,
      description:
        "Elevate your home office with our Modern Minimalist Workstation Setup, featuring a sleek wooden desk topped with an elegant computer, stylish adjustable wooden desk lamp, and complimentary accessories for a clean, productive workspace. This setup is perfect for professionals seeking a contemporary look that combines functionality with design.",
      category: {
        id: 3,
        name: "Furniture",
        slug: "furniture",
        image: "https://i.imgur.com/Qphac99.jpeg",
        creationAt: "2025-10-03T22:56:52.000Z",
        updatedAt: "2025-10-03T22:56:52.000Z",
      },
      images: [
        "https://i.imgur.com/3oXNBst.jpeg",
        "https://i.imgur.com/ErYYZnT.jpeg",
        "https://i.imgur.com/boBPwYW.jpeg",
      ],
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 35,
      title: "Futuristic Holographic Soccer Cleats",
      slug: "futuristic-holographic-soccer-cleats",
      price: 39,
      description:
        "Step onto the field and stand out from the crowd with these eye-catching holographic soccer cleats. Designed for the modern player, these cleats feature a sleek silhouette, lightweight construction for maximum agility, and durable studs for optimal traction. The shimmering holographic finish reflects a rainbow of colors as you move, ensuring that you'll be noticed for both your skills and style. Perfect for the fashion-forward athlete who wants to make a statement.",
      category: {
        id: 4,
        name: "Shoes",
        slug: "shoes",
        image: "https://i.imgur.com/qNOjJje.jpeg",
        creationAt: "2025-10-03T22:56:52.000Z",
        updatedAt: "2025-10-03T22:56:52.000Z",
      },
      images: [
        "https://i.imgur.com/qNOjJje.jpeg",
        "https://i.imgur.com/NjfCFnu.jpeg",
        "https://i.imgur.com/eYtvXS1.jpeg",
      ],
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 48,
      title: "Sleek Olive Green Hardshell Carry-On Luggage",
      slug: "sleek-olive-green-hardshell-carry-on-luggage",
      price: 48,
      description:
        "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
      category: {
        id: 5,
        name: "Miscellaneous",
        slug: "miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2025-10-03T22:56:52.000Z",
        updatedAt: "2025-10-03T22:56:52.000Z",
      },
      images: [
        "https://i.imgur.com/jVfoZnP.jpg",
        "https://i.imgur.com/Tnl15XK.jpg",
        "https://i.imgur.com/7OqTPO6.jpg",
      ],
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
    {
      id: 50,
      title: "Trendy Pink-Tinted Sunglasses",
      slug: "trendy-pink-tinted-sunglasses",
      price: 38,
      description:
        "Step up your style game with these fashionable black-framed, pink-tinted sunglasses. Perfect for making a statement while protecting your eyes from the glare. Their bold color and contemporary design make these shades a must-have accessory for any trendsetter looking to add a pop of color to their ensemble.",
      category: {
        id: 5,
        name: "Miscellaneous",
        slug: "miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2025-10-03T22:56:52.000Z",
        updatedAt: "2025-10-03T22:56:52.000Z",
      },
      images: [
        "https://i.imgur.com/0qQBkxX.jpg",
        "https://i.imgur.com/I5g1DoE.jpg",
        "https://i.imgur.com/myfFQBW.jpg",
      ],
      creationAt: "2025-10-03T22:56:52.000Z",
      updatedAt: "2025-10-03T22:56:52.000Z",
    },
  ];
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
        <Carousel elements={5} />
      </div>
      <FeaturesSection />
      <div className="flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold text-black dark:text-white p-4">
          Categories
        </h1>
        <Button value={"See more"} onClick={() => {}} />
      </div>
      <div className="flex justify-center flex-wrap gap-4 p-2">
        {samlpeCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold text-black dark:text-white p-4">
          Popular Products
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {sampleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
      <NewsletterSection />
    </div>
  );
}

export default Home;
