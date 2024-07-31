import {useEffect, useState} from 'react'

const ExUseeffect = () => {
  const [contar, setcontar] = useState(0)

  useEffect(() => {
    document.title = `voce clicou ${contar} vezes`;
  })

  return (
    <div>
      <button onClick={() => setcontar(contar + 1)}>mais</button>
    </div>
  )
}

export default ExUseeffect