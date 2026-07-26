import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!email || !password) {
<<<<<<< HEAD
        setError("E-mail e senha são obrigatórios");
=======
        setError("Email e senha são obrigatorios");
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        return;
      }

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
<<<<<<< HEAD
        headers: { "Content-Type": "application/json" },
=======
        headers: {
          "Content-Type": "application/json",
        },
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

<<<<<<< HEAD
      if (response.status === 404) {
        setError("Usuário não encontrado");
        return;
      }

      if (response.status === 400) {
        setError("Usuário e senha são obrigatórios");
        return;
      }

      if (response.status === 401) {
        setError("Credenciais inválidas");
        return;
      }

      if (response.status === 500) {
        setError("Erro no servidor");
        return;
      }

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        navigate("/");
        setUser(data);
      }
    } catch (errror) {
=======
      console.log(response.status);

      if (response.status === 404) {
        setError("Usuario não encontrado");
        return;
      }
      if (response.status === 400) {
        setError("Usuario e senha são obrigatorios");
        return;
      }
      if (response.status === 401) {
        setError("Usuário não encontrado");
        return;
      }
      if (response.status === 500) {
        setError("Erro de servidor");
        return;
      }
      if (response.status === 200) {
        setError("");
        const data = await response.json();
        console.log("Dados recebidos da API:", data);
        setUser(data);
        navigate("/");
        console.log(data);
      }
    } catch (error) {
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      console.log(error);
      return;
    }
  }

  return (
    <form
<<<<<<< HEAD
      className="flex h-screen items-center justify-center bg-[#161410]"
=======
      className="flex h-screen items-center justify-center bg-[#171410]"
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mx-auto mb-4" />
        </Link>
<<<<<<< HEAD

=======
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>

        <Button title="Login" type="submit" className="mt-4" />
        <Link to="/register" className="w-full">
<<<<<<< HEAD
          <Button title="Não tenho uma conta" variant="outline" />
=======
          <Button title="Não tenho uma conta" variant={"outline"} />
>>>>>>> ce037113d509e9985f28ad20e3d581562529f4ee
        </Link>
      </div>
    </form>
  );
};

export default Login;
