import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ComponenteFilho = () => {

  const {setMensagem} = useContext(MeuContexto)

  return (
    <div>
      <button onClick={() => setMensagem("nova mensagem")}>Alterar</button>
    </div>
  )
}

export default ComponenteFilho