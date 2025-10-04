import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-10 px-6 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Stay Updated
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Subscribe to our newsletter for the latest deals and updates
      </p>

      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        />
        <button
          type="submit"
          className="px-6 py-3  text-white font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
