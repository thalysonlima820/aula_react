
import Task from "./Task";


const TaskList = ({tasks, onDeletetask, onToggleTaskDone}) => {

  if (tasks.length === 0) {
    return <p>Não há tarefas!</p>;
  }

  return (
    <ul>
        {tasks.map((task) => (
            <Task 
                key={task.id} 
                task={task.text} 
                done={task.done} 
                id={task.id}
                onDelete={() => onDeletetask(task.id)}
                onToggleDone={() => onToggleTaskDone(task.id)}
            />
        ))}
    </ul>
  );
};

export default TaskList;
