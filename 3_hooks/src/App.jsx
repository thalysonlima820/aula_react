import './App.css'

import ExUseeffect from "./components/ExUseeffect";
import Timer from "./components/Timer";
import ComponenteFilho from "./components/ComponenteFilho";

import { MeuContextoProvider } from './contexts/MeuContexto';
import ValorContexto from './components/ValorContexto';
import ExUseReducer from './components/ExUseReducer';
import Treino from './components/Treino';

// treino
import { TreinoContextoProvider } from './contexts/TreinoContexto';
import ExCustonHook from './components/ExCustonHook';
import Contrainer from './components/Contrainer';
import PerfilUsuario from './components/PerfilUsuario';
import ExUseMemo from './components/ExUseMemo';
import ExUseCallback from './components/ExUseCallback';
import TreinoRevisao from './components/TreinoRevisao';
import { TreinoRevisaoContextoProvider } from './contexts/TreinoRevisaoContexto';
import TreinoContextRevisao from './components/TreinoContextRevisao';
import TreinoUseMemo from './components/TreinoUseMemo';
import TreinoUseReducer from './components/TreinoUseReducer';

function App() {

  return (
    <>
    {/* useEffect */}
    <ExUseeffect />
    <Timer />

    {/* useContext */}
    <MeuContextoProvider>
      <ComponenteFilho />
      <ValorContexto />
    </MeuContextoProvider>

    {/* useReducer */}
    <ExUseReducer />

    {/* custon hooks */}
    <ExCustonHook />

    {/* slots e children props */}
    <Contrainer>
      <h2>Titulo</h2>
      <p>Sub titulo</p>
    </Contrainer>

    {/* sincronizar o estado com props  Api*/}
    <PerfilUsuario usuarioId={1} />

    {/* useMemo useCallback */}
    <ExUseMemo numero={2}/>
    <ExUseCallback />





    {/* Treino */}
    <hr />
    <TreinoContextoProvider>
      <Treino />
    </TreinoContextoProvider>
    <hr />
    {/* treino revisao */}
    {/* hook */}
    <TreinoRevisao />
    {/* context */}
    <TreinoRevisaoContextoProvider>
      <TreinoContextRevisao />
    </TreinoRevisaoContextoProvider>
    {/* usememo */}
    <TreinoUseMemo numero={5} />
    {/* usereducer */}
    <TreinoUseReducer />


    </>
  )
}

export default App
