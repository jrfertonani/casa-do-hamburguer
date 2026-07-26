<<<<<<< HEAD
import express, { type Request, type Response } from "express";
=======
import express from "express";
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
import { connection } from "./src/db.js";
import cors from "cors";
import { router } from "./src/routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
<<<<<<< HEAD
  })
=======
  }),
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
);
app.use(router);

connection();

app.listen(3000, () => {
<<<<<<< HEAD
  console.log("Servidor rodando na porta 3000");
=======
  console.log("Server is running on http://localhost:3000");
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
});
