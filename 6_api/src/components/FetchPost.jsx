import { useState, useEffect } from "react"

const FetchPost = () => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {

        const fetchPost = async() => {
            try{

                const resposta = await fetch("https://jsonplaceholder.typicode.com/posts")

                if(!resposta.ok){
                    throw new Error('Erro ao buscar post' + resposta.statusText)
                }

                const dados = await resposta.json()
                setPosts(dados)

            } catch (error) {
                setError(error.message)
            }
        }

        fetchPost()

    }), []

  return (
    <div>
        <h1>Post (Fetch Api)</h1>
        {error ? (<p>Erro: {error}</p>) : (
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

export default FetchPost