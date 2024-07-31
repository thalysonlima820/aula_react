import { useContext } from 'react';
import { TemaContext } from '../contexts/TemaContext'

const BarraFerramenta = () => {

    const ContextoTema = useContext(TemaContext)

    if(!ContextoTema){
        return null
    }

  return (
    <div style={{background: ContextoTema.tema === "claro" ? '#fff': '#000', color: ContextoTema.tema === "claro" ? '#000' : '#fff'}}>
        <button onClick={ContextoTema?.alternarTema}>Alterar tema</button>
    </div>
  )
}

export default BarraFerramenta