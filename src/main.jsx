import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider} from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { RouterProvider } from "react-router";
import router from "./router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <CartProvider>
          <RouterProvider router={router}/>
      </CartProvider>
    </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
