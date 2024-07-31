import { usuario } from '../interface/usuario.iterface.ts.ts'

// type info = {
//   nome: string
//   idade: number
// }

const Informacao = ({nome, idade}: usuario) => {
  return (
    <div>
        <h3>Ola {nome}, você tem {idade} anos ?</h3>
    </div>
  )
}

export default Informacao