import { useEffect, useState } from "react";
import axios from "axios";

const PostForm = ({ idDelete, post, onSuccess }) => {
  const [nome, setNome] = useState(post?.nome || '');
  const [email, setEmail] = useState(post?.email || '');
  const [senha, setSenha] = useState(post?.senha || '');

  useEffect(() => {

    if(post) {
      setNome(post.nome) 
      setEmail(post.email) 
      setSenha(post.senha)
    } else{
      setNome('') 
      setEmail('') 
      setSenha('')
    }

  }, [post])

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = { nome, email, senha };

    try {
      
      if(post) {

        const resposta = await axios.put(
          `http://localhost/slim_api/public/v1/usuarios/atualiza/${post.id}`,
          newPost
        );
        onSuccess(resposta.data, "update");

      } else{
        const resposta = await axios.post(
          "http://localhost/slim_api/public/v1/usuarios/adicionar",
          newPost
        );
        onSuccess(resposta.data, "add");
      }

    } catch (error) {
      console.log("erro", error);
    }
  };

  const handleDelete = async() => {
    try {
      await axios.get(
          `http://localhost/slim_api/public/v1/usuarios/remover/${post.id}`
        );
        onSuccess(post, "delete");
        setNome('') 
        setEmail('') 
        setSenha('')

    } catch (error) {
      console.log("erro", error);
    }
  }

  useEffect(() => {

    const deletepost = async() => {
      try {
        await axios.get(
          `http://localhost/slim_api/public/v1/usuarios/remover/${idDelete}`
        )

        onSuccess(idDelete, "del");
          setNome('') 
          setEmail('') 
          setSenha('')
      } catch (error) {
        console.log('erro')
      }
    }

    if(idDelete){
    deletepost()
    }
 
  }, [idDelete])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Digite um nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Digite um email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Digite uma senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      {post ? <button type="submit">Editar</button>  : <button type="submit">Enviar</button>}
    
    {post && (
      <button type="button" onClick={handleDelete}>Excluir</button>
    )}

    </form>
  );
};

export default PostForm;
