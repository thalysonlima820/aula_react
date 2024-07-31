import { useState, useEffect } from "react"
import axios from "axios"
import PostForm from "./PostForm"


const PostManager = () => {

    const [posts, setPosts] = useState([])
    const [erros, setErros] = useState("")

    const [selectPost, setSelectPost] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [idDel, setIdDel] = useState(null);

    const handleSuccess = (post, operation) => {
        if (operation === "add") {
            setPosts((currentPosts) => [post, ...currentPosts]);
          } else if(operation === "update"){
            setPosts((currentPosts) => 
                currentPosts.map((p) => p.id === post.id ? post : p ))
          } else if(operation === "delete") {
            setPosts((currentPosts) => 
                currentPosts.map((p) => p.id !== post.id ))
            selectPost(null)
          } else if (operation === "del") {
            setPosts((currentPosts) => currentPosts.filter((p) => p.id !== post));
          }

          setSelectPost(false)
    }

    useEffect(() => {

        const axiosPost = async() => {
            try{
                const pesquisa = await axios.get(
                    "http://localhost/slim_api/public/v1/usuarios/lista"
                )

                setPosts(pesquisa.data.slice(0, 5))

            } catch (error) {
                setErros(error.message)
            }
        }

        axiosPost()
        
    }, []);

    const handleEdition = (post) => {
        setSelectPost(post);
        setIsEditing(true);
    }
    const handkeCancelEdit = () => {
        setIsEditing(false);
        setSelectPost(null);
    }
    const handleDelete = (id) => {
        setIdDel(id);
    }

  return (
    <div>
        <h1>Gerenciar Post</h1>
        <PostForm idDelete={idDel} post={isEditing ? selectPost : null} onSuccess={handleSuccess}/>
        {isEditing && <button onClick={handkeCancelEdit}>Cancelar</button>}
        {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.nome}</h2>
                    <h4>{post.id}</h4>
                    <p>{post.email}</p>
                    <button onClick={() => handleEdition(post)}>Editar</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>
                </div>
            ))
        }
    </div>
  )
}

export default PostManager