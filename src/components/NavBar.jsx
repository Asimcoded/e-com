import React, { useState } from "react";
import { ShoppingCart, User, Sun, Moon, Search } from "lucide-react";
import { LogoIcon } from "../assets";
import { useTheme } from "../contexts/ThemeContext";
import {useAuth} from '../contexts/AuthContext'
import Button from "./Button";
const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const {userData} = useAuth()
  return (
    <nav>
      <div className="w-full bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={LogoIcon} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Carty
            </span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 hidden md:flex">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Nav Links + Icons */}
          <div className="flex items-center space-x-5">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:block"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:block"
            >
              Category
            </a>

            {/* Cart */}
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            {/* Profile */}
          
            {userData ? <span className="text-gray-700 dark:text-gray-200 hidden md:block">Hello, {userData.name}</span>:<Button value="Login / Register" onClick={()=>{}} />}
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => toggleTheme()}
              className="ml-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
