//TELAS
import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'

// REACT
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [query, setQuery] = useState("")
  const [categoria, setCategoria] = useState("")
  const [fotos, setFotos] = useState([])
  const [fotoAmpliada, setFotoAmpliada] = useState(null)
  const [activateSearch, setActivateSearch] = useState(false)

  const fetchData = async ({ query, categoria }) => {

    const apikey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || categoria) {

      let searchquery = query;

      if (query && categoria) {
        searchquery = `${query} ${categoria}`
      } else if (categoria) {
        searchquery = categoria
      }

      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            client_id: apikey,
            query: searchquery,
          }
        }
      )
      setFotos(response.data.results);
      return
    }

    const response = await axios.get(
      `https://api.unsplash.com/photos/random`,

      {
        params: {
          client_id: apikey,
          count: 12
        }
      }
    )

    setFotos(response.data)
  }

  useEffect(() => {

    fetchData(query, categoria)

  }, [])

  useEffect(() => {

    if(activateSearch) {
      fetchData({query, categoria})
      setActivateSearch(false)
    }

  }, [activateSearch])

  return (
    <div className='container'>
      <SearchBar setQuery={setQuery} setCategoria={setCategoria} setActivateSearch={setActivateSearch} />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada &&
        <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      }
    </div>
  )
}

export default App
