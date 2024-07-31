import {useState, createContext} from 'react'

export const TreinoContexto = createContext()

export const TreinoContextoProvider = ({children}) => {

    const [numero, setNumero] = useState(0)

    const valor = {
        numero,
        setNumero
    }

    return(
        <TreinoContexto.Provider value={valor}>
            {children}
        </TreinoContexto.Provider>
    )
}