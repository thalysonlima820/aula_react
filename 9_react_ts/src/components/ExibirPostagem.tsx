import { useEffect, useState } from "react"

import axios from "axios"

type Usuario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

const ExibirPostagem = () => {

    const [usuario, setusuario] = useState<Usuario[]>([])
    const [carregando, setCarregando] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {

        const buscarUsuario = async() => {
            try {

                const resposta = await axios.get('http://localhost/slim_api/public/v1/usuarios/lista')

                setusuario(resposta.data.slice(0, 5))
                
            } catch (error) {
                setError('erro ao acessar')
            } finally {
                setCarregando(false)
            }
        }

        buscarUsuario()

    }, [])

  return (
    <div>
        <h2>postagem</h2>
        {carregando 
        ? (<p>Carregando</p>) 
        : (
            <ul>
                {usuario.map((usu) => (
                    <li key={usu.id}>{usu.nome}</li>
                ))}
            </ul>
        )
        }

        {error && <p>{error}</p>}
    </div>
  )
}

export default ExibirPostagem