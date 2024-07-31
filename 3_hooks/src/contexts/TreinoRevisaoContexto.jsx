import { useState, createContext, useEffect } from "react";

export const TreinoRevisaoContexto = createContext()

export const TreinoRevisaoContextoProvider = ({children}) => {

    const [usuario, setusuario] = useState(null)
    const id = 1

    useEffect(() => {

        const buscarUsuarios = async() => {
            const resposta = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const dadosUsuario = await resposta.json();
            setusuario(dadosUsuario)
        }

        if(id) {
            buscarUsuarios()
        }

    }, [id])

    const valor = {
        usuario
    }
    return (
        <TreinoRevisaoContexto.Provider value={valor}>
            {children}
        </TreinoRevisaoContexto.Provider>
    )

}