import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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
  </StrictMode>,
);
