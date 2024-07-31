import React, { useState } from 'react'

const LoginButton = ({loggedIn}) => {

    const [ log, setlog] = useState(false)

    const mudar = () => {
        setlog(!log)
    }

  return (
    <div>
        {log ? <button onClick={mudar}>Sair</button> : <button  onClick={mudar}>Entrar</button>}
    </div>
  )
}

export default LoginButton