import { Router } from "express";
<<<<<<< HEAD
import { auth, login, logout, register } from "./controller/user-controller.js";
=======
import { auth, login, logout, register } from "./controller/userController.js";
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
import { authMiddleware } from "./middlewares/auth.js";
import { deleteProduct, getProducts } from "./controller/product-controller.js";
import {
  getCartItems,
  createCartItem,
} from "./controller/cartItem-controller.js";

export const router = Router();

<<<<<<< HEAD
// Rotas de usuário
=======
//Rotas de usuario
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);

<<<<<<< HEAD
// Rota de produto
router.get("/get-products", getProducts);
router.delete("/delete-product/:id", authMiddleware, deleteProduct);

// Cart
router.get("/get-cart-items", authMiddleware, getCartItems);
=======
//rotas de produtos
router.get("/get-products", getProducts);
router.delete("/delete-product/:id", authMiddleware, deleteProduct);

//Cart
router.get("/get-cart-item", authMiddleware, getCartItems);
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
router.post("/create-cart-item", authMiddleware, createCartItem);
