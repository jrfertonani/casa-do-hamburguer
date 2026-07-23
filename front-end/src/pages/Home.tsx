import { useEffect, useState } from "react";
import Product from "../components/Product";
import type { ProductType } from "../types/Products";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";
    const elementoNaoSelecionado =
      "md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };

  const getProducts = async () => {
    try {
      const responser = await fetch("http://localhost:3000/get-products");

      const data = await responser.json();

      setProducts(data);
    } catch (error) {
      console.log("error");
      return;
    }
  };

  const filterProduct = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-auto w-full px-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hemburguer
        </div>
        <div
          className={getCategoryClass("Bebida")}
          onClick={() => handleChangeCategory("Bebida")}
        >
          Bebida
        </div>
        <div
          className={getCategoryClass("Porção")}
          onClick={() => handleChangeCategory("Porção")}
        >
          Porção
        </div>
      </div>

      <p className="md-2 mt-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-2 md:gap-3">
        {filterProduct.map((product) => (
          <Product
            id={product.id}
            description={product.description}
            img={product.img}
            name={product.name}
            price={product.price}
            category={product.category}
            key={product.id}
            setProducts={setProducts}
          />
        ))}
        {filterProduct.length === 0 && <p>Não há producots desta categoria</p>}
      </div>
    </div>
  );
};

export default Home;
