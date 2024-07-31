import React from 'react'

const RenderCondicion = ({user}) => {



  return (
    <div>
        {user ? <h1>Logado {user}</h1> : <h1>Nao logado</h1>}
        {user && <h1>Logado {user}</h1>}
    </div>
  )
}

export default RenderCondicion