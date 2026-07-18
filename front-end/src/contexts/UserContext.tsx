import { createContext, useState, type ReactNode } from "react";
import type { UserContextype } from "../types/User";

export const UserContext = createContext<UserContextype>({
  user: null,
  setUser: () => {},
});

export const UserProvaider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
