import React from "react";
import {useCart} from '../contexts/CartContext'
import { Link } from "react-router";
export default function Cart() {
  const {cartData : cartItems, removeItem, 
  } = useCart();
  const demoCartItems = [
    {
      id: 1,
      title: "Majestic Mountain Graphic T-Shirt",
      slug: "majestic-mountain-graphic-t-shirt",
      price: 44,
      description:
        "Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic. Perfect for those who love the outdoors or want to add a touch of nature-inspired design to their look, this tee is crafted from soft, breathable fabric ensuring all-day comfort. Ideal for casual outings or as a unique gift, this t-shirt is a versatile addition to any collection.",
      category: {
        id: 1,
        name: "Clothes",
        slug: "clothes",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2025-10-07T14:24:35.000Z",
        updatedAt: "2025-10-07T14:24:35.000Z",
      },
      images: [
        "https://i.imgur.com/QkIa5tT.jpeg",
        "https://i.imgur.com/jb5Yu0h.jpeg",
        "https://i.imgur.com/UlxxXyG.jpeg",
      ],
      creationAt: "2025-10-07T14:24:35.000Z",
      updatedAt: "2025-10-07T14:24:35.000Z",
    },
  ];

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4"> 
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="mb-6 text-center">Looks like you haven't added anything to your cart yet. Start shopping to fill it up!</p>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-75" >
          Start Shopping
        </Link>
      </div>
    );
  } 
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button className="text-sm flex items-center gap-1">
              <span className="text-lg">←</span> Continue Shopping
            </button>
            <h1 className="text-2xl font-bold">
              Shopping Cart{" "}
              <span className="text-gray-500 text-base">
                {cartItems.length} items
              </span>
            </h1>
          </div>

          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 border rounded-xl mb-4 bg-white dark:bg-gray-800"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <div className="text-right">
                <p className="font-semibold">${item.price.toFixed(2)}</p>
                <button className="text-red-500 mt-2 text-sm" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-80 space-y-6">
          {/* Order Summary */}
          <div className="p-4 border rounded-xl bg-white dark:bg-gray-800">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  ${cartItems.reduce((acc, cur) => acc + cur.price, 0).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>
                  $
                  {cartItems.reduce(
                    (acc, cur) => acc + cur.price * 0.05,
                    0
                  ).toFixed(2)}
                </span>
              </div>
            </div>
            <hr className="my-3 border-gray-400" />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>
                $
                {(cartItems.reduce((acc, cur) => acc + cur.price * 0.05, 0) +
                  cartItems.reduce((acc, cur) => acc + cur.price, 0)).toFixed(2)}
              </span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-75" >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
