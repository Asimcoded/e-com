import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="w-full max-w-80 bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all dark:bg-gray-900 dark:border-gray-700">
      {/* Product Image */}
      <a href="#">
        <img
          className="object-cover w-full h-64 transition-transform duration-300 hover:scale-105"
          src={product.images?.[0] || "https://placehold.co/600x400"}
          alt={product.title}
        />
      </a>

      {/* Product Info */}
      <div className="px-5 pb-5 mt-3">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {product.title}
          </h5>
        </a>

        {/* Price & Buttons */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition">
              Add to Cart
            </button>
            <button className="px-4 py-2 text-xs font-medium text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
