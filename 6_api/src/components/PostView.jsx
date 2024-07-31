import {useParams} from 'react-router-dom'
import useHttp from '../hooks/useHttp'

const PostView = () => {

    const {postId} = useParams()

    const {
        data: post, 
        error, 
        loading} = useHttp(
        `http://localhost/slim_api/public/v1/usuarios/lista/${postId}`, "GET", null,
        [postId]
    )

  return (
    <div>
    <h1> post: {postId}</h1>
    {loading && <p>Carregando...</p>}
    {error && <p>{error}</p>}
    {post && (
        <div>
            <h2>{post.nome}</h2>
            <p>{post.email}</p>
        </div>
    )}

</div>
  )
}

export default PostView