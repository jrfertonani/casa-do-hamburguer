import { useEffect, useState } from "react";
import Product from "../components/Product";
<<<<<<< HEAD
import type { ProductType } from "../types/Product";

const Home = () => {
  const [category, setCategory] = useState("Hamburger");
=======
import type { ProductType } from "../types/Products";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
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

<<<<<<< HEAD
  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
=======
  const getProducts = async () => {
    try {
      const responser = await fetch("http://localhost:3000/get-products");

      const data = await responser.json();

      setProducts(data);
    } catch (error) {
      console.log("error");
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      return;
    }
  };

<<<<<<< HEAD
  const filteredProduct = products.filter((product) => {
    return product.category === category;
  });

  console.log(filteredProduct);

  useEffect(() => {
    getProduct();
=======
  const filterProduct = products.filter((product) => {
    return product.category === category;
  });

  useEffect(() => {
    getProducts();
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  }, []);

  return (
    <div className="mx-auto w-full px-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
<<<<<<< HEAD
          className={getCategoryClass("Hamburger")}
          onClick={() => handleChangeCategory("Hamburger")}
        >
          Hamburger
=======
          className={getCategoryClass("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hemburguer
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
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

<<<<<<< HEAD
      <p className="mt-2 mb-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-2 md:gap-3">
        {filteredProduct.map((product) => (
=======
      <p className="md-2 mt-2 font-bold text-[#F2DAAC] uppercase">{category}</p>
      <div className="flex flex-col gap-2 md:gap-3">
        {filterProduct.map((product) => (
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
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
<<<<<<< HEAD
        {filteredProduct.length === 0 && <p>Não há produtos desta categoria</p>}
=======
        {filterProduct.length === 0 && <p>Não há producots desta categoria</p>}
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      </div>
    </div>
  );
};

export default Home;
