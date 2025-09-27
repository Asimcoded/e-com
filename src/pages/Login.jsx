import React, { useState } from "react";
import { Mail, Lock, Eye } from "lucide-react";
import { LogoIcon } from "../assets";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ email, password }); 
    if (result.success) {
      alert(result.message);
      navigate("/");
    } else {
      setEmail("")
      setPassword("")
      alert(result.message);
    }
  }
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img src={LogoIcon} alt="Logo" className="w-20 h-20" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
        Welcome
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
        Sign in to your account
      </p>

      {/* Tabs */}
      <div className="flex mb-6">
        <button
          onClick={() => {
            setActiveTab("signin");
            navigate("/auth/login");
          }}
          className={`flex-1 py-2 rounded-l-lg border bg-blue-600 text-white  ${
            activeTab === "signin"
              ? "opacity-100 font-semibold shadow-md"
              : "opacity-50 text-gray-500"
          }`}
        >
          Sign In
        </button>

        <button
          onClick={() => {
            setActiveTab("signup");
            navigate("/auth/register");
          }}
          className={`flex-1 py-2 rounded-r-lg border bg-blue-600 text-white  ${
            activeTab === "signup"
              ? "opacity-100 font-semibold shadow-md"
              : "opacity-50 text-gray-500"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full pl-10 pr-10 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Eye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 w-5 h-5 text-gray-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg cursor-pointer text-white font-semibold  bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={email === "" || password === ""}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
