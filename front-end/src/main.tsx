import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./router.tsx";
import { UserProvaider } from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvaider>
      <RouterProvider router={router} />,
    </UserProvaider>
  </StrictMode>,
);
