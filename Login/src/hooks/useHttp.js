import { useState, useEffect } from 'react'
import axios from "axios"

const useHttp = () => {

    const [usuarios, setUsuarios] = useState([])

    const handleSuccess = (dados, operation) => {
      if(operation === "add"){
        setUsuarios((dadosUsuarios) => [dados, ...dadosUsuarios])
      }
    }
    const handleUsuarios = async () => {

        const pesquisa = await axios.get('http://localhost/slim_api/public/v1/usuarios/lista')

        setUsuarios(pesquisa.data)
    }

    useEffect(() => {
      handleUsuarios()
    }, [])
    
    return {usuarios, handleSuccess}
}

export default useHttp;