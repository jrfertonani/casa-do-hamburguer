import { ChevronLeft, Trash } from "lucide-react";
<<<<<<< HEAD
import { formatterPrice } from "../utils/formatterPrice";
import { useContext } from "react";
import { CartItemContext } from "../contexts/CartItemsContext";
=======
import { formatterPrice } from "../utils/formatterPrice ";
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee

type CartItemType = {
  title: string;
  price: number;
  img: string;
  id: string;
<<<<<<< HEAD
  quantity: number;
};

const CartItem = ({ title, price, img, id, quantity }: CartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./${img}`} alt="" className="w-[100px] rounded-md" />

=======
};

const CartItem = ({ title, price, img, id }: CartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./${img}`} alt="" className="w-[100px] rounded-md"></img>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      <div className="flex-1">
        <p className="text-sm font-bold uppercase">{title}</p>
        <p className="text-sm font-bold text-[#848484]">
          {formatterPrice(price)}
        </p>
        <div className="mt-1 flex items-center gap-4">
          <ChevronLeft
            className="cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white"
            size={25}
          />
<<<<<<< HEAD
          <p className="text-sm font-bold">{quantity}</p>
=======

          <p className="text-sm font-bold">1</p>
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
          <ChevronLeft
            className="rotate-180 cursor-pointer rounded-md bg-[#C92A0E] p-1 text-white"
            size={25}
          />
        </div>
      </div>
<<<<<<< HEAD

=======
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      <Trash size={18} className="cursor-pointer" onClick={() => alert(id)} />
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
export default CartItem;
