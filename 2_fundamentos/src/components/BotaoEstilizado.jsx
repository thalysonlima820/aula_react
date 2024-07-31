
const BotaoEstilizado = () => {

    const estilobotao = {
        backgroundColor: "#333",
        color:" #fff",
        padding: "15px 32px"
    }

    let lo = false;

  return (
    <div>
        <button style={{ padding: "20px"}}>clicar</button>
        <button style={estilobotao}>clicar</button>
        <br />
        {lo && <h1>c</h1>}
        <button style={lo ? estilobotao : null}>clicar</button>
    </div>
  )
}

export default BotaoEstilizado