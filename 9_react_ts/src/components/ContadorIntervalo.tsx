import { useState } from 'react'
import useInterlval from '../hooks/useInterlval'

const ContadorIntervalo = () => {

    const [contador, setContador] = useState(0)

    useInterlval(() => {
        setContador(contador + 1)
    }, 5000)

  return (
    <h1>{contador}</h1>
  )
}

export default ContadorIntervalo