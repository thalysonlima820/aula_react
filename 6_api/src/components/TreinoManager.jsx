
import TreinoForm from './TreinoForm'
import useTreino from '../hooks/useTreino'

const TreinoManager = () => {

    const {usuarios, error, loadin, 
        usuarioEdit, issucces, 
        setIdDelete,
        handleEditar, handleCandelar, cadastro
    } = useTreino()



  return (
    <div>
        <TreinoForm cadastro={cadastro} usuario={issucces ? usuarioEdit : null} />
        {issucces && <button onClick={handleCandelar}>Cancelar</button>}
        <br />
        {error && <p>{error}</p>}
        {loadin && <p>Carregando</p>}
        {usuarios.map((usuario) => (
            <div className='divusuario' key={usuario.id}>
               Usuario: {usuario.nome} --
               Email:   {usuario.email}
               <button onClick={() => handleEditar(usuario)}>Editar</button>
               <button onClick={() => setIdDelete(usuario.id)}>Deletar</button>
            </div>
        ))}
    </div>
  )
}

export default TreinoManager