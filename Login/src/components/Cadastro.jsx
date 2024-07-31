import axios from "axios"
import { useState } from "react"



const Cadastro = ({ handleSuccess }) => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')



    const handlecadastro = async (event) => {
        event.preventDefault();
        const usuarios = {
            nome,
            email,
            senha
        }

        const pesquisa = await axios.post(
            "http://localhost/slim_api/public/v1/usuarios/adicionar",
            usuarios
        );

        handleSuccess(pesquisa.data, "add")
        setEmail('')
        setNome('')
        setSenha('')
    }

    return (
        <form onSubmit={handlecadastro}>
            <input type="text" placeholder='nome' onChange={(e) => setNome(e.target.value)} />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='senha' onChange={(e) => setSenha(e.target.value)} />
            <br />
            <button>Cadastrar</button>
        </form>
    )
}

export default Cadastro