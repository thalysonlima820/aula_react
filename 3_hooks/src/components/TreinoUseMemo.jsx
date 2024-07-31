import {useMemo} from 'react'

const TreinoUseMemo = ({numero}) => {

    const fazer = useMemo( () => {
        return dublicar(numero)
    }, [numero])

  return (
    <div>{fazer}</div>
  )
}

const dublicar = (num) => {
    return num *5
}

export default TreinoUseMemo