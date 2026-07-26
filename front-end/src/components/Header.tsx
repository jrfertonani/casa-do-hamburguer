import { Link, useLocation } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { LogOut, ShoppingCart, Box, LayoutDashboard, Plus } from "lucide-react";
import Cart from "./Cart";
import { CartItemContext } from "../contexts/CartItemsContext";

const Header = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { user, setUser } = useContext(UserContext);
<<<<<<< HEAD
  const { cartItems, setCartItems } = useContext(CartItemContext);
=======
  const { cartItems } = useContext(CartItemContext);
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  const location = useLocation();

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });

      if (response.status !== 200) {
<<<<<<< HEAD
        console.log("deu ruim");
=======
        console.log("Deus ruim");
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        return;
      }

      const data = await response.json();
<<<<<<< HEAD
      console.log(data);
      setUser(data);
=======
      setUser(data);

      console.log(data);
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });

      if (!response.ok) {
<<<<<<< HEAD
        console.log("nao deu certo");
=======
        console.log("Não deu  certo ");
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        return;
      }

      setUser(null);
    } catch (error) {
      console.log(error);
      return;
    }
  };

<<<<<<< HEAD
  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cart-items", {
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Erro ao realizar a requisição");
        return;
      }

      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    handleAuthUser();
    getCartItems();
=======
  useEffect(() => {
    handleAuthUser();
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  }, []);

  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1";
<<<<<<< HEAD

=======
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    if (location.pathname === path) {
      return `${baseClass} text-[#161410] bg-[#F2DAAC]`;
    } else {
      return baseClass;
    }
  };

<<<<<<< HEAD
  let cartQuantity = 0;

  for (let i = 0; i < cartItems.length; i++) {
    cartQuantity += cartItems[i].quantity;
  }

  return (
    <div className="bg-[#161410]">
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <Link to="/" className="py-2">
          <img src="./logo.png" alt="" />
        </Link>

        {user ? (
          <div className="flex items-center gap-8 text-white">
            {user.admin && (
              <div className="hidden items-center gap-2 text-[#F2DAAC] md:flex">
=======
  return (
    <div className="bg-[#161410]">
      {showCart && <Cart setShowCart={setShowCart} showCart={showCart} />}

      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <Link to="/">
          <img src="./logo.png" alt="Logo" />
        </Link>

        <Link to="/login" className="text-white">
          Login
        </Link>

        {user && user.userInfo ? (
          <div className="flex items-center gap-8 text-white">
            {user.userInfo.admin && (
              <div className="flex items-center gap-2 text-[#F2DAAC] md:flex">
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box size={18} />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutDashboard size={18} />
                  </div>
                </Link>
<<<<<<< HEAD
                <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1">
                  <Plus size={18} />
                </div>
=======
                <Link to="/">
                  <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border-1">
                    <Plus size={18} />
                  </div>
                </Link>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
              </div>
            )}

            <div className="relative cursor-pointer">
              <ShoppingCart size={18} onClick={() => setShowCart(!showCart)} />
<<<<<<< HEAD
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                {cartQuantity}
=======
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] p-1 text-[#161410]">
                {cartItems.length}
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
              </p>
            </div>

            <div className="flex items-center gap-2">
<<<<<<< HEAD
              <p>{user.name}</p>
=======
              <p>{user.userInfo.name}</p>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
              <LogOut
                size={18}
                className="cursor-pointer"
                onClick={() => handleLogout()}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <div className="flex h-[35px] w-[130px] cursor-pointer items-center justify-center rounded-sm bg-[#F2DAAC]">
              Entrar
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
export default Header;
