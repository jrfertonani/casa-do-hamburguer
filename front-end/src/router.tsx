import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pedidos from "./pages/Pedidos";
<<<<<<< HEAD
import PublicRoute from "./components/PublicRoute";

const Layout = () => {
=======
import PublicRouter from "./components/PublicRouter";

const Leyout = () => {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  return (
    <div className="flex min-h-screen flex-col bg-[#161410]">
      <Header />
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
<<<<<<< HEAD
    element: <Layout />,
=======
    element: <Leyout />,
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
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
<<<<<<< HEAD
      <PublicRoute>
        <Login />
      </PublicRoute>
=======
      <PublicRouter>
        <Login />
      </PublicRouter>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    ),
  },
  {
    path: "/register",
    element: (
<<<<<<< HEAD
      <PublicRoute>
        <Register />
      </PublicRoute>
=======
      <PublicRouter>
        <Register />
      </PublicRouter>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    ),
  },
]);
