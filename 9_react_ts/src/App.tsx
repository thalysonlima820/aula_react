import './App.css'
import ContadorIntervalo from './components/ContadorIntervalo'
import Counter from './components/Counter'
import Exercicio1 from './components/Exercicio1'
import Greeting from './components/Greeting'
import TextInput from './components/TextInput'
import UseReducer from './components/UseReducer'
import Treino  from './components/Treino'
import { TemaProvider } from './contexts/TemaContext'
import BarraFerramenta from './components/BarraFerramenta'
import ExibirPostagem from './components/ExibirPostagem'

function App() {


  return (
    <>
      <h1>React com Ts</h1>
      {/* 1 - COMPONTE FUNCIONAL COM TS */}
        <Greeting name="Thalyson" experience={1} />
      
      {/* 2 - HOOKS COM TIPOS */}
        <Counter />

      {/* 3 - MANIPULAÇAO DE EVENTOS COM TIPOS */}
        <TextInput />

      {/* 4 - CUSTOM HOOKS COM TS */}
        <ContadorIntervalo />
        <hr />
            {/* ECERCICIO 1 */}
              <Exercicio1 />
        <hr />
      {/* 5 - USEREDUCER COM TS */}
        <UseReducer />

<hr />
        {/* treino */}
        <Treino />

        <TemaProvider>
          <BarraFerramenta />
        </TemaProvider>


        <hr />

        <ExibirPostagem />

    </>
  )
}

export default App
