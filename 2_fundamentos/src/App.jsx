import './App.css'

import Welcome from "./components/Welcome";
import Pai from "./components/Pai";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import Teste from "./components/Teste";
import Counter from "./components/Counter";
import UseinforForm from "./components/UseinforForm";
import Treino2 from "./components/Treino2";
import Button from "./components/Button";
import Form from "./components/Form";
import Informacao from "./func/Informacao";

import RenderCondicion from "./components/RenderCondicion";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import BotaoEstilizado from "./components/BotaoEstilizado";
import BotaoAzul from "./components/BotaoAzul";

function App() {

  const name = "thalyson";
  const idade = 22;

  return (
    <>
      {/* <Teste nome={name} /> */}

      {/* hook */}

      {/* <Counter /> */}
      {/* manipulaçao estados */}
      {/* <UseinforForm /> */}

      {/*  */}
      {/* <Treino2 name={name} idade={idade}/> */}

      {/* <Button /> */}

      {/* <Informacao /> */}

      {/* <RenderCondicion user="thalyson"/> */}

      {/* <LoginButton loggedIn={false}/> */}
      {/* <Warning warning={null} /> */}


      {/* <NumberList number={[1,2,3,4,5]} /> */}

      {/* <BotaoEstilizado /> */}


      <BotaoAzul />

    </>
  )
}

export default App
