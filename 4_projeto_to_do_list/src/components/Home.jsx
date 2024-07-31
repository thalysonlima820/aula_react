
import TaskInput from './TaskInput'
import TaskList from './TaskList'



import {useTasks} from "../hooks/useTasks"

const Home = () => {

    const { tasks, addTasks, deleteTask, toggleTaskDone } = useTasks()

  return (
    <div>

    <h1>Lista de Tarefas</h1>

      <TaskInput onAddTasks={addTasks}/>
      <TaskList tasks={tasks} 
      onDeletetask={deleteTask} 
      onToggleTaskDone={toggleTaskDone}/>
    </div>
  )
}

export default Home