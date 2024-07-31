import './App.css'

import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import  Profile  from './pages/Profile'
import Setings from './pages/Setings'
import Tarefas from './pages/Tarefas'
import Erro404 from './pages/Erro404'

function App() {

  const n = 1

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        {/* redirecionamento */}
        <li><Link to="/login">Login</Link></li>
        {/* aninhadas */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        {/* navlink */}
        <li>
          <NavLink className={({isActive}) => (isActive ? "active-link" : "")} to="/contato">Contato</NavLink>
        </li>
      </ul>

      {/* Rotas dinamica */}
      <div>
        <h2>tarefas</h2>
        <Link to="/tarefa/1">Tarefa 1</Link>
        <Link to="/tarefa/2">Tarefa 2</Link>
        <Link to="/tarefa/3">Tarefa 3</Link>
      </div>

      {/* erro 404 */}
      <div>
        <h2>teste 404</h2>
        <Link to="/tetete">Erro404</Link>
      </div>

    </nav>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={ n == 1 ? <About /> : <Contato />} />
      <Route path='/contato' element={<Contato />} />

      {/* useNavigate */}
      <Route path='/login' element={<Login />} />


      <Route path='/dashboard' element={<Dashboard />} >
        <Route path='profile' element={<Profile />} />
        <Route path='settings' element={<Setings />} />
      </Route>

      {/* rotas dinamica */}
      <Route path='/tarefa/:id' element={<Tarefas />} />

      
      {/* erro 404 */}
      <Route path='*' element={<Erro404 />} />
     </Routes>
    </>
  )
}

export default App
