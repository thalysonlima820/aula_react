import {Link} from "react-router-dom"

const Task = ({task, done, id, onDelete, onToggleDone}) => {
  return (
    <li>
        <span onClick={onToggleDone} 
        style={{
            textDecoration : done ? "line-through" : "none",
            cursor: "pointer",
        }}
        >{task}</span>
        <div className="btns">
        <button >
            <Link to={`/edit/${id}/${task}`} >Editar</Link>
        </button>
        <button className="btn1" onClick={onDelete}>Remover</button>
        </div>
    </li>
  )
}

export default Task