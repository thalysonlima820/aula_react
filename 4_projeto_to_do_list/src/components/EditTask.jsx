import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useTasks } from "../hooks/useTasks"

const EditTask = () => {

  const {id, task} = useParams()
  const {editar} = useTasks()
  const [input, setInput] = useState('');


  useEffect(() => {
    setInput(task)
  }, [task])

  const handleSubmit = (e) => {
      e.preventDefault();
      editar(Number(id), input);
      setInput('')

  }

  return (
    <div>
      <h1>Edit Task {task}</h1>
      <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa!" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Editar</button>
    </form>
    </div>
  )
}

export default EditTask