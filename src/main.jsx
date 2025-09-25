import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider} from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { RouterProvider } from "react-router";
import router from "./router";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
          <RouterProvider router={router}/>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
