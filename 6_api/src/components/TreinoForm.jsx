import {useState, useEffect} from 'react'

const TreinoForm = ({ cadastro, usuario }) => {

    const [nome, setNome] = useState(usuario?.nome || '')
    const [email, setEmail] = useState(usuario?.email ||'')
    const [senha, setSenha] = useState(usuario?.senha ||'')

    const [error, setErro] = useState('')

    useEffect(() => {
        if(usuario){
            setNome(usuario.nome)
            setEmail(usuario.email)
            setSenha(usuario.senha)
        }else{
            setNome('')
            setEmail('')
            setSenha('')
        }

    }, [usuario])


    const handleCadastro = async(event) => {
        event.preventDefault();
        setErro('')
        const DadosUsuario = {nome, email, senha}
        try {
            cadastro(DadosUsuario)
            setNome('')
            setEmail('')
            setSenha('')
        } catch (error) {
            setErro("Erro")
        }
    }

  return (
    <form onSubmit={handleCadastro}>
        {error && <p>{error}</p>}
        <input 
            value={nome}
            placeholder='Nome: '
            onChange={(e) => setNome(e.target.value)}
            type="text" />
        <input 
            value={email}
            placeholder='Email: '
            onChange={(e) => setEmail(e.target.value)}
            type="text" />
        <input 
            value={senha}
            placeholder='Senha: '
            onChange={(e) => setSenha(e.target.value)}
            type="text" />
        <br />
        {usuario ? <button type='submit'>Salvar</button>  : <button type='submit'>Cadastrar</button>}
    </form>
  )
}

export default TreinoForm