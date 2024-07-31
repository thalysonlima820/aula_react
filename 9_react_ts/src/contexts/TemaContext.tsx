import { createContext, ReactNode, useState } from "react";

type Tema = "claro" | "escuro";

interface temaContext {
    tema: Tema;
    alternarTema: () => void;
}

export const TemaContext = createContext<temaContext | null>(null)

interface TemaProviderProps {
    children: ReactNode
}

export const TemaProvider = ({children}: TemaProviderProps) => {

    const [tema, SetTema] = useState<Tema>("claro")

    const alternarTema = () => {
        SetTema((temaAtual) => temaAtual === "claro" ? "escuro" : "claro")
    }

    return (
        <TemaContext.Provider value={{tema, alternarTema}}>
            {children}
        </TemaContext.Provider>
    )
}