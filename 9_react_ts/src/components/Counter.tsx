import { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(`o valor é ${count}`)
    }, [count])
    

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount((num) => num + 1)}>MAIS 1</button>
    </div>
  )
}

export default Counter