import { useEffect, useState } from 'react';
import { UsersInterface } from '../../../interface/UsersInterface';


const Users = () => {
  const [users, setUsers] = useState<UsersInterface[]>([]);

  useEffect(() => {
    const handleDadosusers = async () => {
      try {
        const response = await fetch('../../../../public/data/usuarios.json');
        const json = await response.json()
        setUsers(json.users);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    handleDadosusers();
  }, []);

  return (
    <div>
      usuários <br />
      {Array.isArray(users) && users.length > 0 ? (
        users.map((u) => (
          <div key={u.id}>{u.name}</div>
        ))
      ) : (
        <div>Nenhum usuário encontrado.</div>
      )}
    </div>
  );
};

export default Users;
