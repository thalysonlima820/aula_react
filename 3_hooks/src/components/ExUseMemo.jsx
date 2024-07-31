import { useMemo } from 'react'

const ExUseMemo = ({numero}) => {

    const resultadoCalculoPessado = useMemo( () => {
        return operacaopesada(numero)
    }, [numero]);

  return (
    <div>
        Resultado: {resultadoCalculoPessado}
    </div>
  )
};

const operacaopesada = (num) => {
    return num * 1000;
}

export default ExUseMemo