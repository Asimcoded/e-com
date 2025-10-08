import React, { useState } from "react";
import { Heart, Share2, Truck, ShieldCheck, RefreshCcw } from "lucide-react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import { Loader } from "../components";
import { useCart } from "../contexts/CartContext";

export default function Product() {
  const productParams = useParams();
  const {addToCart} = useCart()
  const {
    data: product,
    loading,
    error,
  } = useFetch(`/products/${productParams.id}`);
  const [selectedImage, setSelectedImage] = useState(null);

  // Update selectedImage when data is loaded
  React.useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  if (!product) return <p>No product found</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className=" bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div>
          <div className="w-full h-96 border flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
            <img
              src={selectedImage}
              alt="Product"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-24 h-24 border rounded-lg flex items-center justify-center cursor-pointer overflow-hidden ${
                  selectedImage === img
                    ? "border-black dark:border-white"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-80 transition" onClick={()=>{
              addToCart(product)
            }}>
              Add to Cart
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Heart size={20} />
            </button>
            <button className="p-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Share2 size={20} />
            </button>
          </div>

          <hr className="my-4" />

          {/* Features */}
          <div className="grid grid-cols-3 text-center text-sm gap-4">
            <div>
              <Truck className="mx-auto mb-1 text-blue-500" size={22} />
              <p className="font-medium">Free Shipping</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                On orders over $50
              </p>
            </div>
            <div>
              <ShieldCheck className="mx-auto mb-1 text-green-500" size={22} />
              <p className="font-medium">2 Year Warranty</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                Full coverage
              </p>
            </div>
            <div>
              <RefreshCcw className="mx-auto mb-1 text-purple-500" size={22} />
              <p className="font-medium">Easy Returns</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                30-day policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
