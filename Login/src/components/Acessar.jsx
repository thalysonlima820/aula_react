
import { useAuth } from '../context/AuthContext';  

const Acessar = () => {

  const {logout, user} = useAuth()

  const handleLogout = () => {
    logout()
  }


  return (
    <div>
      Acessar
      <button onClick={handleLogout}>Sair</button>
      {user && <h1>Ola {user.nome}</h1>}
    </div>
  );
};

export default Acessar;
