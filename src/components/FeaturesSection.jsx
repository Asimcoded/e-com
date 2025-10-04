import React from "react";
import { Truck, ShieldCheck, RefreshCw } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-10 h-10 text-blue-500 dark:text-blue-400" />,
      title: "Free Shipping",
      subtitle: "On orders over $50",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500 dark:text-green-400" />,
      title: "Secure Payment",
      subtitle: "100% secure checkout",
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-purple-500 dark:text-purple-400" />,
      title: "Easy Returns",
      subtitle: "30-day return policy",
    },
  ];

  return (
    <section className="w-full py-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center border border-gray-300 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
