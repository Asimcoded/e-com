import { createBrowserRouter } from "react-router";
import {Cart, Category, Home, Login, NotFound, Product, Profile, Register, SearchResult} from "./pages"
import {AuthLayout, RootLayout} from "./layouts";

const router = createBrowserRouter([
  {
    path : "/",
    Component : RootLayout,
    children : [
      {index : true, Component : Home},
      {path : "product/:id", Component : Product},
      {path : "cart", Component : Cart},
      {path : "category", Component : Category},
      {path : "searchresult", Component : SearchResult},
      {path : "profile", Component : Profile},
      {path : "*", Component : NotFound}
    ]
  },
  {
    path : "/auth",
    Component : AuthLayout,
    children : [
      {path : "login", Component : Login},
      {path : "register", Component : Register}
    ]
  }
])

export default router;