import { useState, useEffect } from "react";


export const useTasks = () => {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTasks = (task) => {
    setTasks([...tasks, 
      {
        id: Date.now(), 
        text: task,
        done: false
      }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task));
  };

  const editar = (id, newData) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, text: newData } : task
    ));
    console.log('Task updated');
    navegar('/')
  }


  return { tasks, addTasks, deleteTask, toggleTaskDone, editar };
};
