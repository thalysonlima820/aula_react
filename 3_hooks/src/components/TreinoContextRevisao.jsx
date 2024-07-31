import { useContext } from "react"
import { TreinoRevisaoContexto } from "../contexts/TreinoRevisaoContexto"

const TreinoContextRevisao = () => {

    const {usuario} = useContext(TreinoRevisaoContexto)

  return (
    <div>
        <div>{usuario === null ? <p>Carregando</p> : <p>{usuario.name}</p>}</div>
    </div>
  )
}

export default TreinoContextRevisao