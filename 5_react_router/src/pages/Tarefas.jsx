import { useParams } from "react-router-dom"
const Tarefas = () => {
    const {id} = useParams()
  return (
    <div>
        <h2>tarefas</h2>
        {id}
    </div>
  )
}

export default Tarefas