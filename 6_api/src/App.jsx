import './App.css'

import {Routes, Route, Link} from "react-router-dom"
import FetchPost from './components/FetchPost'
import AxiosPost from './components/AxiosPost'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'
import TreinoManager from './components/TreinoManager'
import PostView from './components/PostView'

function App() {


  return (
    <>
      {/* get com fetch e axios */}
      <h1>GET com Fetch e Axios</h1>
      <div>
        <Link to='/fetchpost'>Fetch Post</Link>
        <Link to='/axiospost'>Axios Post</Link>
        <Link to='/posts'>gerenciar Post</Link>
        <Link to='/post/800'>navegar Post 1</Link>

                {/* custon hook */}
                <div>
                <Link to='/post/view/670'>navegar Post </Link>
                </div>
        <br />
        {/* treino */}
        <Link to='/treino/posts'>Treino</Link>
      </div>
      <Routes>
        <Route path='/fetchpost' element={<FetchPost />} />
        <Route path='/axiospost' element={<AxiosPost />} />
        <Route path='/posts' element={<PostManager />} />
        <Route path='/post/:postId' element={<PostLoader />} />

      {/* custon hook */}

      <Route path='/post/view/:postId' element={<PostView />} />


        {/* treino */}
        <Route path='/treino/posts' element={<TreinoManager />} />
      </Routes>
    </>
  )
}

export default App
