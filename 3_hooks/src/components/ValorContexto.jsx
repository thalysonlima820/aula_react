import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ValorContexto = () => {

    const {mensagem} = useContext(MeuContexto)

  return (
    <div> o valor é: { mensagem }</div>
  )
}

export default ValorContexto