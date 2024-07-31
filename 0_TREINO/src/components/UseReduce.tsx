import { useReducer } from 'react'

import { ConterReducer } from '../Reducers/ConterReducer'
import { valor } from '../types/valor'

const UseReduce = () => {

    const [state, dispatch] = useReducer(ConterReducer, valor)

    return (
        <div>
            <p>{state.numero}</p>
            <button onClick={() => dispatch({ type: "mais" })}>Mais</button>
            <button onClick={() => dispatch({ type: "menos" })}>Menos</button>
        </div>
    )
}

export default UseReduce