import {useState} from 'react'

import { useNavigate } from 'react-router-dom'

const Login = () => {

    //Redirecionamento de URL
    const [username, setUsername] = useState("")

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        console.log(`o Usuario ${username} Logou com sucesso`)

        navigate("/")
    }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Login