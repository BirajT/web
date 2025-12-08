
import TodoComponent from "../components/todo-component.jsx";

const onEdit=(e)=>{
    console.log(e.target.value)
    setValue(e.target.value)
}

const Todo=()=>{
    return(
        <div>
        <h1>Todo App</h1>

        <button onClick={onEdit}>edit</button>
        </div>
    )
}

export default Todo;