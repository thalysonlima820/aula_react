import { useState, useEffect } from "react";
import axios from "axios";

const useTreino = () => {

    const [usuarios, setUsuarios] = useState([])
    const [error, setErro] = useState('')
    const [loadin, setLoadin] = useState(false)

    //editar
    const [usuarioEdit, setUsuarioEdit] = useState(null)
    const [issucces,  setIssucces] = useState(false)

    const [idDelete, setIdDelete] = useState(null)

    const handleSuccess = (post, operetion) => {
        if(operetion === "add"){
            setUsuarios((currentPosts) => [post, ...currentPosts])
        } else if(operetion === "update") {
            setUsuarios((currentPosts) => 
            currentPosts.map((p) => p.id === post.id ? post : p))
        } else if(operetion === "delete") {
            setUsuarios((currentPosts) => currentPosts.filter((p) => p.id !== post))
        }
        setIssucces(false)
    }

    useEffect(() => {
        setLoadin(true)
        const dadosUsuarios = async() => {
            try {
                const dados = await axios.get(
                    'http://localhost/slim_api/public/v1/usuarios/lista'
                ) 

                setUsuarios(dados.data)
            } catch (error) {
                setErro("Erro ao consumir api")
            }
        }
        setLoadin(false)
        dadosUsuarios()
    }, [])

    useEffect(() => {
        const deletepost = async() => {
            if(idDelete){
                await axios.get(
                    `http://localhost/slim_api/public/v1/usuarios/remover/${idDelete}`
                ) 
                handleSuccess(idDelete, "delete")
            }
        }
        if(idDelete){
            deletepost()
        }
        }, [idDelete])

    const cadastro = async(DadosUsuario) => {

        if(usuarioEdit){
            const CadastrarUsuario = await axios.put(
                `http://localhost/slim_api/public/v1/usuarios/atualiza/${usuarioEdit.id}`,
                DadosUsuario
            ) 
            handleSuccess(CadastrarUsuario.data, "update")
        }else{
            const CadastrarUsuario = await axios.post(
                "http://localhost/slim_api/public/v1/usuarios/adicionar",
                DadosUsuario
            ) 
            handleSuccess(CadastrarUsuario.data, "add")
        }
    }

    const handleEditar = (usuario) => {
        setIssucces(true)
        setUsuarioEdit(usuario)
    }

    const handleCandelar = () => {
        setIssucces(false)
        setUsuarioEdit(null)
    }

    return {usuarios, error, loadin, 
        usuarioEdit, issucces, 
        idDelete, setIdDelete,
        handleEditar, handleCandelar, cadastro
    }
}

export default useTreino;
