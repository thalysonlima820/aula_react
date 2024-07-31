import React, { useState } from 'react'

const Treino2 = () => {

    const [nome, setNome] = useState('')

    const HandleSubmit = (event) => {

        event.preventDefault()
        alert(nome)
    }

  return (
    <form onSubmit={HandleSubmit}>
        <label>
            Nome:
            <input type="text" 
                name={nome}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
        </label>
        <button type='submit'>aa</button>
    </form>
  )
}

export default Treino2