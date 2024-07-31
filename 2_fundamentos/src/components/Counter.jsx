import {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     alert('mudou')
    // }, [count])



  return (
    <div>
        {count}
        <br />
        <button onClick={() => setCount(count + 1)}>Adicionar</button>
    </div>
  )
}

export default Counter