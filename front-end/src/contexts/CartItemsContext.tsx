<<<<<<< HEAD
import { createContext, useState, type ReactNode } from "react";
=======
import { Children, createContext, useState, type ReactNode } from "react";
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
import type { CartItemType, CartItemsContextType } from "../types/CartItem";

export const CartItemContext = createContext<CartItemsContextType>({
  cartItems: [],
  setCartItems: () => {},
});

<<<<<<< HEAD
export const CartItemsProvider = ({ children }: { children: ReactNode }) => {
=======
export const CartItemProvider = ({ children }: { children: ReactNode }) => {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  return (
    <CartItemContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemContext.Provider>
  );
};
