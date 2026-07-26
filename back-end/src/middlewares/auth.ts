import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
<<<<<<< HEAD
  next: NextFunction
=======
  next: NextFunction,
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
) => {
  const { user } = req.cookies;

  if (!process.env.JWT_SECRET) {
<<<<<<< HEAD
    res.status(500).json({ message: "Erro no servidor" });
=======
    res.status(500).json({ message: "Erro no Servidor" });
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    return;
  }

  try {
    const decoded = jwt.verify(user, process.env.JWT_SECRET);
<<<<<<< HEAD
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Usuário não autenticado" });
=======

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Usuario não autenticado" });
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    return;
  }
};
