
const Button = () => {

    const handleClick = () => {
        alert("clicou")
    }

  return (
    <div>
        <button onClick={handleClick}>s</button>
    </div>
  )
}

export default Button