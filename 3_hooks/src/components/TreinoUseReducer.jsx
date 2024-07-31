import {useReducer} from 'react'

const numeroBase = {numero: 1}

function reducer (estado, acao) {

    switch (acao.tipo) {
        case "Somar":
            return {numero: estado.numero + 1}
        case "Menos":
            return {numero: estado.numero - 1}
        default:
            throw new Error("funcao nao existe")
    }
}

const TreinoUseReducer = () => {

    const [estado, acao] = useReducer(reducer, numeroBase)

  return (
    <div>
        numero: {estado.numero}
        <button onClick={() => acao({tipo: "Somar"})}>Somar</button>
        <button onClick={() => acao({tipo: "Menos"})}>Menos</button>
    </div>
  )
}

export default TreinoUseReducer