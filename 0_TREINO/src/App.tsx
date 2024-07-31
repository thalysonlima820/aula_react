
import { useEffect, useState } from 'react'
import './App.css'
import Informacao from './components/Informacao'
import UseReduce from './components/UseReduce'

function App() {

  const [nome, setNome] = useState('thalyson')
  const [idade, setIdade] = useState(22)

  useEffect(() => {
    if(!nome) {
      setNome('thalyson')
    }
    if(!idade){
      setIdade(22)
    }
  },[nome, idade])
 

  return (
    <>
      <h1>Pagina Treino</h1>
      <hr />
      <Informacao nome={nome} idade={idade}/>

      <UseReduce />
    </>
  )
}

export default App
