

const Descricao = (props) => {

  return (
   <div>
        <h1>Seu nome é {props.nome}</h1>
        <h2>idade: {props.idade > 10 && <p>ola</p>}</h2>
   </div>
  )
}

export default Descricao