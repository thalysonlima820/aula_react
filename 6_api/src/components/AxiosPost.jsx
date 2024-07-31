import { useState, useEffect } from "react"

import axios from "axios"

const AxiosPost = () => {

    const [posts, setPosts] = useState([])
    const [erros, setErros] = useState("")

    useEffect(() => {

        const axiosPost = async() => {
            try{
                const pesquisa = await axios.get("https://jsonplaceholder.typicode.com/posts")

                setPosts(pesquisa.data)

            } catch (error) {
                setErros(error.message)
            }
        }

        axiosPost()
        
    }, [])

  return (
    <div>
        <h1>Axios (Fetch Api)</h1>
        {erros ? (<p>Erro: {erros}</p>) : (
            posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        )}
    </div>
  )
}

export default AxiosPost