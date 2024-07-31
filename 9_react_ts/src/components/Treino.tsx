import {useReducer} from 'react'

import { testeNum } from '../types/testeNum'
import { TesteReducer } from '../reducers/TesteReducer'


const Treino = () => {

    const [num, fun] = useReducer(TesteReducer, testeNum)

  return (
    <div>
        <p>{num.valor}</p>
        <button onClick={() => fun({type: "menos"})}>menos</button>
        <button onClick={() => fun({type: "mais"})}>mais</button>
    </div>
  )
}

export default Treino