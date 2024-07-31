import React, { useState, useEffect } from 'react'

const Exercicio1 = () => {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        alert(`Login com sucesso para os usuarios ${usuario} e sua senha é ${senha}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="usuario">Usuario:</label>
                    <input 
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="text" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Exercicio1