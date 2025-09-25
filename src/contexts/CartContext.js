import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
  const { userData } = useAuth();
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    (async () => {
      if (userData) {
        const cart = JSON.parse(localStorage.getItem("cartData"));
        if (cart) setCartData(cart);
      }else{
        clearCart()
      }
    })();
  }, []);
  const addToCart = (product) => {
    setCartData((prevCart) => [...prevCart, product]);
    localStorage.setItem("cartData", JSON.stringify([...cartData, product]));
  };
  const removeItem = (productId) => {
    const updatedCart = cartData.filter((item) => item.id !== productId);
    setCartData(updatedCart);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
  };
  const clearCart = () => {
    setCartData([]);
    localStorage.removeItem("cartData");
  };
  return (
    <CartContext.Provider
      value={{ cartData, addToCart, removeItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
