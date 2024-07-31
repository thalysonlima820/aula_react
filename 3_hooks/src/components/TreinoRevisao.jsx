import { useState } from 'react'
import useTreino from '../hooks/useTreino'

const TreinoRevisao = () => {

    const {n, somar} = useTreino()

    const [numero, setNumero] = useState(0)

  return (
    <div>
        {n}
        <br />
        <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)}/>
        <button onClick={() => somar(numero)}>dobrar</button>
    </div>
  )
}

export default TreinoRevisao