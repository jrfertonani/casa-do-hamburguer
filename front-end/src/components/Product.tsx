import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Products";
import { formatterPrice } from "../utils/formatterPrice ";

export const Product = ({
  id,
  name,
  description,
  price,
  img,
  category,
}: ProductType) => {
  return (
    <div>
      <div className="flex gap-2">
        <img
          src={`./${img}`}
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />
        <div className="flex w-full flex-col">
          <p className="text-lg font-bold uppercase md:text-sm">{name}</p>
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            {description}
          </p>
          <div className="grap-2 flex items-center justify-end">
            <p className="text-sm text-[#F2DAAC]">{formatterPrice(price)}</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
