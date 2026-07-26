import { createContext, useState, type ReactNode } from "react";
<<<<<<< HEAD
import type { UserContextType } from "../types/User";

export const UserContext = createContext<UserContextType>({
=======
import type { UserContextype } from "../types/User";

export const UserContext = createContext<UserContextype>({
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  user: null,
  setUser: () => {},
});

<<<<<<< HEAD
export const UserProvider = ({ children }: { children: ReactNode }) => {
=======
export const UserProvaider = ({ children }: { children: ReactNode }) => {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
