import useWindowSize from "../hooks/useWindowSize"

const ExCustonHook = () => {
    const { width, height } = useWindowSize()
  return (
    <div>
        <p>a largura é: {width}</p>
        <p>a altura é : {height}</p>
    </div>
  )
}

export default ExCustonHook