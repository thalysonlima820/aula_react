import {useReducer, useContext} from 'react'

import { TreinoContexto } from '../contexts/TreinoContexto';

const estadoInicial = { numero: 0}

function reducer(estado, acao) {

    switch (acao.base) {
        case "somar":
            return {numero: estado.numero + 1};
        case "menos":
            return{numero: estado.numero - 1};
        default:
            throw new Error("nao encontrada")
    }
}

const Treino = () => {

    const [estado, acao] = useReducer(reducer, estadoInicial)

    const {numero, setNumero} = useContext(TreinoContexto)

  return (
    <div>
        <p>Numero: {estado.numero}</p>
        <button onClick={() => acao({base: "somar"})}>Mais</button>
        <button onClick={() => acao({base: "menos"})}>Menos</button>
        <br />
        <hr />
        {numero}
        <button onClick={() => setNumero(numero +1)}>Mais</button>
    </div>
  )
}

export default Treino