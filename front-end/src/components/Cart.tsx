import { X } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import { CartItemContext } from "../contexts/CartItemsContext";

type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};

<<<<<<< HEAD
const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
=======
const Cart = ({ showCart, setShowCart }: CartTypeProps) => {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  // const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { cartItems, setCartItems } = useContext(CartItemContext);

  const getCartItems = async () => {
    try {
<<<<<<< HEAD
      const response = await fetch("http://localhost:3000/get-cart-items", {
=======
      const response = await fetch("http://localhost:3000/get-cart-item", {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        credentials: "include",
      });

      if (!response.ok) {
        console.log("Erro ao realizar a requisição");
        return;
      }

<<<<<<< HEAD
      const data = await response.json();
      setCartItems(data);
=======
      const date = await response.json();
      setCartItems(date);
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
<<<<<<< HEAD
    <div className="absolute right-0 z-1 flex h-screen w-[375px] flex-col bg-[#F2DAAC] p-5">
      <div className="flex justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />
        <p className="font-bold uppercase">Meu carrinho</p>
=======
    <div className="rigth-0 absolute z-1 flex h-screen w-[375px] flex-col bg-[#F2DAAC] p-5">
      <div className="flex justify-between">
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />
        <p className="font-bold uppercase">Meu carrinho </p>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-2">
        {cartItems.map((item) => (
          <CartItem
            title={item.product.name}
            price={item.product.price}
            img={item.product.img}
<<<<<<< HEAD
            quantity={item.quantity}
=======
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
            id={item.product.id}
          />
        ))}
      </div>

<<<<<<< HEAD
      <Button title="Finalizar pedido" />
=======
      <Button title={"Finalizar pedido"} />
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    </div>
  );
};

export default Cart;
