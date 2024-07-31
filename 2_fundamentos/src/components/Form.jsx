import {useState} from 'react'

const Form = () => {

    const [value, setValue] = useState('')

    const handleSubmit = (event) => {
        //manipulaçao de dados
        //validaçao
        //envio ao servidor pela api
        //loading
        //chamanda da funcao de mensagens de erro4

        event.preventDefault()

        alert(value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        onChange={(e) => setValue(e.target.value)} 
        name={value}
        value={value} 
        placeholder='preencha o campo' 
        />
        <button type='submit'>enviar</button>
    </form>
  )
}

export default Form