import React, { useCallback, useState } from 'react'

const Botao = React.memo(({onClick, children}) => {
    return <button onClick={onClick}>{children}</button>;
});

const ExUseCallback = () => {

    const [contador, setcontador] = useState(0)

    const incrementar = useCallback(() => {
        setcontador((contadoranterior) => contadoranterior + 1)
    }, [])

  return (
    <div>
        <p>Contagem: {contador}</p>
        <Botao onClick={incrementar}>incrementar</Botao>
    </div>
  )
}

export default ExUseCallback