export interface UserInterface {
  userInfo: UserInterface | null;
  id: string;
  name: string;
  email: string;
  cep: string;
  admin: boolean;
}

export type UserContextype = {
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};
