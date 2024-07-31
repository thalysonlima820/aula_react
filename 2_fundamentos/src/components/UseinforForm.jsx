import {useState} from 'react'

const UseinforForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const HandleSubmit = (event) => {

        event.preventDefault()

        alert(name + '  ' + email)
    }


  return (
    <form onSubmit={HandleSubmit}>
        <label>
            Nome:
            <input type="text" 
                placeholder='nome'
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        <label>
            Email:
            <input type="text" 
                placeholder='email'
                value={email}
                name='email'
                onChange={(e) => setEmail(e.target.value)}
            />
        </label>
        <button type='subimit'>Enviar</button>
    </form>
  )
}

export default UseinforForm