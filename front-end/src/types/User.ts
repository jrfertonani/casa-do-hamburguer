export interface UserInterface {
<<<<<<< HEAD
=======
  userInfo: UserInterface | null;
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  id: string;
  name: string;
  email: string;
  cep: string;
  admin: boolean;
}

<<<<<<< HEAD
export type UserContextType = {
=======
export type UserContextype = {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
  user: UserInterface | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
};
