import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState(null);
  const [jwt, setJwt] = useState(null);
  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const jwtToken = localStorage.getItem("jwt");
      if (jwtToken) setJwt(jwtToken);
      if (user) setUserData(user);
    })();
  }, []);
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
      });
      const token = response.data;
      setJwt(token["access_token"]);
      localStorage.setItem("jwt", token["access_token"]);
      const userResponse = await axios.get(`${baseUrl}/auth/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const user = userResponse.data;
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
      return { success: true, message: "Login successful" };
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    setUserData(null);
    setJwt(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("jwt");
    return { success: true, message: "Logout successful" };
  };

  const signup = async ({ name, email, password }) => {
    try {
      const response = await axios.post(`${baseUrl}/users`, {
        name,
        email,
        password,
        avatar:
          "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg",
      });
      return { success: true, message: "Signup successful" };
    } catch (error) {
      console.error("Signup failed:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Signup failed",
      };
    }
  };

  const editProfile = async ({ name, email }) => {
    try {
      const response = await axios.put(`${baseUrl}/users/${userData.id}`, {
        name,
        email,
      });
      const updatedUser = response.data;
      setUserData(updatedUser);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      return { success: true, message: "Profile updated successfully" };
    } catch (error) {
      console.error("Profile update failed:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Profile update failed",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{ userData, jwt, login, signup, logout, editProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
