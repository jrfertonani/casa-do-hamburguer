import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pedidos from "./pages/Pedidos";
import PublicRouter from "./components/PublicRouter";

const Leyout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Leyout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRouter>
        <Login />
      </PublicRouter>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRouter>
        <Register />
      </PublicRouter>
    ),
  },
]);
