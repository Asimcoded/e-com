import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const {userData,logout} = useAuth();
  const navigate = useNavigate()
  return (
    <div className="max-w-full mx-auto p-4 space-y-6">
      {/* User Info Card */}
      <div className="flex items-center justify-between bg-white shadow rounded-2xl p-4">
        <div className="flex items-center space-x-4">
          <img
            src={userData?.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full object-cover border"
          />
          <div>
            <h2 className="text-lg font-semibold">{userData?.name}</h2>
            <p className="text-sm text-gray-500">{userData?.email}</p>
          </div>
        </div>
        <button
          onClick={()=>{
            navigate("/profile/edit")
          }}
          className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Edit
        </button>
      </div>

      {/* Actions Card */}
      <div className="bg-white shadow rounded-2xl divide-y">
        <button className="w-full py-3 text-left px-4 hover:bg-gray-100">
          Wishlist
        </button>
        <button className="w-full py-3 text-left px-4 hover:bg-gray-100">
          Cart
        </button>
        <button
          onClick={()=>{
            const confirmLogout = confirm("Are you sure you want to logout?") 
            if(!confirmLogout) return;
            logout()
            navigate("/")
          }}
          className="w-full py-3 text-left px-4 text-red-600 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
