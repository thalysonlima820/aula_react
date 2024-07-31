import { useState } from "react"
export const Treino = () => {
    const [nome, setNome] = useState('')

    return (
      <div>
          <h1>ola {nome}</h1>
  
          <form>
              <label>
                  Nome: 
                  <input value={nome} type="text" name="nome" onChange={(e) => setNome(e.target.value)}/>
              </label>
              <button type="submit">enviar</button>
          </form>
      </div>
    )
}
