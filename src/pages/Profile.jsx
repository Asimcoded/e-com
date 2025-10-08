import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    logout();
    navigate("/");
  };
  if(userData===null) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center space-y-6 px-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">You are not logged in</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center">Please log in to view your profile and access personalized features.</p>
    
      </div>)}
  return (
    <div className="max-w-lg mx-auto px-5 py-10 space-y-8">

      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex items-center justify-between transition">
        <div className="flex items-center gap-4">
          <img
            src={userData?.avatar || "https://placehold.co/100x100?text=User"}
            alt="Avatar"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {userData?.name || "Guest User"}
            </h2>
            <p className="text-gray-500 text-sm">{userData?.email || "No email"}</p>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden">
        <button
          onClick={() => navigate("/wishlist")}
          className="w-full py-3 px-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition flex justify-between items-center"
        >
          <span className="text-gray-700 dark:text-gray-200 font-medium">Wishlist</span>
          <span className="text-gray-400">›</span>
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="w-full py-3 px-5 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition flex justify-between items-center"
        >
          <span className="text-gray-700 dark:text-gray-200 font-medium">Cart</span>
          <span className="text-gray-400">›</span>
        </button>

        <button
          onClick={handleLogout}
          className="w-full py-3 px-5 text-left hover:bg-red-50 dark:hover:bg-red-900/20 transition flex justify-between items-center"
        >
          <span className="text-red-600 font-medium">Logout</span>
          <span className="text-red-400">›</span>
        </button>
      </div>
    </div>
  );
};

export default Profile;
