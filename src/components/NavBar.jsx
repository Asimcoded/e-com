import { ShoppingCart, User, Sun, Moon, Search } from "lucide-react";
import { LogoIcon } from "../assets";
import { useTheme } from "../contexts/ThemeContext";
import {useAuth} from '../contexts/AuthContext'
import {useCart} from '../contexts/CartContext'
import Button from "./Button";
import { Link, useNavigate } from "react-router";
const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const {userData} = useAuth()
  const {cartData} = useCart()
  const navigate = useNavigate()
  return (
    <nav>
      <div className="w-full bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center space-x-2">
            <img src={LogoIcon} alt="Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Carty
            </span>
          </Link>


          {/* Nav Links + Icons */}
          <div className="flex items-center space-x-5">
            <Link to="/"

              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:block"
            >
              Home
            </Link>
            <Link to="/categories"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden md:block"
            >
              Category
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400" />
              {cartData.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cartData.length}
              </span> }
            </Link>

            {/* Profile */}
          
            {userData ? 
            <Link to="/profile"><img src={userData.avatar} alt={userData.name} className="w-10 h-10 rounded-full"/></Link>:<Button value="Login / Register" onClick={()=>{navigate("/auth/login")}} />}
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
