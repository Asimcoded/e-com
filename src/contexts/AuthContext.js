import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext(null);
import "dotenv/config";
import axios from "axios";
import { useNavigate } from "react-router";
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [jwt, setJwt] = useState(null);
  useEffect(() => {
    (async () => {
      const user = JSON.parse(localStorage.getItem("userData"));
      const jwtToken = localStorage.getItem("jwt");
      if (jwtToken) setJwt(jwtToken);
      if (userData) setUserData(user);
    })();
  }, []);
  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(`${process.env.API_URL}/auth/login`, {
        email,
        password,
      });
      const token = response.data;
      setJwt(token["access_token"]);
      localStorage.setItem("jwt", token["access_token"]);
      const userResponse = await axios.get(
        `${process.env.API_URL}/auth/profile`,
        {
          headers: { Authorization: `Bearer ${jwt}}` },
        }
      );
      const user = userResponse.data;
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
      navigate("/");
      return { success: true };
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
    navigate("/");
  };

  const signup = async ({ name, email, password }) => {
    try {
      const response = await axios.post(`${process.env.API_URL}/auth/users`, {
        name,
        email,
        password,
        avatar:
          "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small_2x/default-avatar-photo-placeholder-profile-icon-vector.jpg",
      });
      const data = response.data;
      
      if (response.status === 201) {
        await login({ email: data.email, password : data.password });
      }
      return { success: true };
    } catch (error) {
      console.error("Signup failed:", error);
      return {
        success: false,
        message: error.response?.data?.message || "Signup failed",
      };
    }
  };

  return <AuthContext.Provider value={{ userData, jwt, login, signup, logout }}>{children}</AuthContext.Provider>
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}