import {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
const PostLoader = () => {

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [successMenssage,  setSuccessMenssage] = useState("")
    const {postId} = useParams()

    useEffect(() => {

        const fetachPost = async() => {
            setLoading(true)
            setError('')
            setSuccessMenssage('')

            try {
                if(postId > 500) {
                    throw new Error("nao existe")
                }

                const pesquisa = await axios.get (
                    `http://localhost/slim_api/public/v1/usuarios/lista/${postId}`
                )

                setPost(pesquisa.data)
                setSuccessMenssage("post com Sucesso")
                
            } catch (error) {
                setError("falha ao carregar Post " + error.message)
            } finally {
                setLoading(false)
            }
        }

        fetachPost()

    }, [postId])

  return (
    <div>
        <h1> post: {postId}</h1>
        {loading && <p>Carregando...</p>}
        {error && <p>{error}</p>}
        {successMenssage && <p>{successMenssage}</p>}
        {post && (
            <div>
                <h2>{post.nome}</h2>
                <p>{post.email}</p>
            </div>
        )}

    </div>
  )
}

export default PostLoader