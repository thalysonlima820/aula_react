
import Cadastro from './Cadastro'

import useHttp from '../hooks/useHttp'

const Dados = () => {

    const {usuarios, handleSuccess} = useHttp()
    

    console.log( typeof handleSuccess)


    return (
        <div>
            {usuarios
                ? (usuarios.map((usuario) => (
                    <div key={usuario.id}>
                        <p>nome: {usuario.nome}</p>
                        <p>email: {usuario.email}</p>
                        <p>senha: {usuario.senha}</p>
                        <hr />
                    </div>
                )))
                : (<p>nao tem dados</p>)}

                <Cadastro handleSuccess={handleSuccess}/>
        </div>
    )
}

export default Dados