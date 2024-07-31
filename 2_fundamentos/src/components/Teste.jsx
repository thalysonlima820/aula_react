import { useState } from "react"

const Teste = ({nome}) => {

    const [nomess, setNome] = useState('')

    const nomes = () => {
        alert(nome)
    }

    

  return (
    <div>
        <button onClick={ () => nomes()}>mudar</button>
        <h1>Meu nome é: {nome}</h1>

    </div>
  )
}

export default Teste