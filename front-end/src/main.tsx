import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
<<<<<<< HEAD
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";
import { UserProvider } from "./contexts/UserContext.tsx";
import { CartItemsProvider } from "./contexts/CartItemsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <CartItemsProvider>
        <RouterProvider router={router} />
      </CartItemsProvider>
    </UserProvider>
=======

import { RouterProvider } from "react-router/dom";
import { router } from "./router.tsx";
import { UserProvaider } from "./contexts/UserContext.tsx";
import { CartItemProvider } from "./contexts/CartItemsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvaider>
      <CartItemProvider>
        <RouterProvider router={router} />,
      </CartItemProvider>
    </UserProvaider>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  </StrictMode>,
);
