<<<<<<< HEAD
import type { ProductType } from "./Product";
=======
import type { ProductType } from "./Products";
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee

export type CartItemType = {
  id: string;
  userId: string;
  productId: string;
<<<<<<< HEAD
  quantity: number;
=======
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  product: ProductType;
};

export type CartItemsContextType = {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
};
