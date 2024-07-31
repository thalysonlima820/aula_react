import { useReducer } from 'react'

import { CounterReducer } from '../reducers/CounterReducer'
import { estadoinicial } from '../types/num';


const UseReducer = () => {

    const [count, dispatch] = useReducer(CounterReducer, estadoinicial)

  return (
    <div>
        <p>{count.numero}</p>
        <button onClick={() => dispatch({type: "incremento"})}>Encrementar</button>
        <button onClick={() => dispatch({type: "decremento"})}>decremento</button>
    </div>
  )
}

export default UseReducer