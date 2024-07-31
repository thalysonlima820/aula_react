// Login.jsx
import { useState } from "react";
import useHttp from "../hooks/useHttp";
import md5 from "crypto-js/md5";
import { useAuth } from "../context/AuthContext";

import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const { usuarios } = useHttp();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const senhaHash = md5(senha).toString();
    const usuario = usuarios.find((usuario) => usuario.nome === nome && usuario.senha === senhaHash);

    if (usuario) {
      login(usuario);
      setError("");
      navigate("/acessar")
    } else {
      setError("Nome de usuário ou senha incorretos");
    }
  };

  return (
    <div>
      <h1>Logar</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='nome' onChange={(e) => setNome(e.target.value)} />
        <input type="password" placeholder='senha' onChange={(e) => setSenha(e.target.value)} />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
