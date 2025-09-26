import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { LogoIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img src={LogoIcon} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Carty
            </span>
          </div>
          <p className="text-sm">
            Your one-stop shop for everything you love. Fast delivery and
            amazing deals every day.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Category
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Carty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
