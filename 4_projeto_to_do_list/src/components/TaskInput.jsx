import { useState } from "react"


const TaskInput = ({onAddTasks}) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.trim()) {
            onAddTasks(input)
            setInput('')
        }

    }

 return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa!" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskInput;