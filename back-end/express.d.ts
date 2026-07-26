<<<<<<< HEAD
import jwt from "jsonwebtoken";
=======
import Jwt from "jsonwebtoken";
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee

declare global {
  namespace Express {
    interface Request {
<<<<<<< HEAD
      user?: string | admin | jwt.JwtPayload;
=======
      user?: string | admin | Jwt.JwtPayload;
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
    }
  }
}
