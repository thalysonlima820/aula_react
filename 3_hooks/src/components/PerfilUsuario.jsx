import React, {useState, useEffect} from 'react'

const PerfilUsuario = ({usuarioId}) => {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        const buscarUsuarios = async() => {
            const resposta = await fetch(
                `https://jsonplaceholder.typicode.com/users/${usuarioId}`
            );
            const dadosUsuario = await resposta.json();
            setUsuario(dadosUsuario)
        }

        if(usuarioId) {
            buscarUsuarios()
        }

    }, [usuarioId]);

  return (
    <div>
        {usuario ? (
            <div>
                <h1>{usuario.name}</h1>
                <p>{usuario.email}</p>
            </div>
        ) : (
            <p>Carregando...</p>
        )}
    </div>
  )
}

export default PerfilUsuario