// import { useState } from "react"

// const TodoComponent=()=>{

//     const [todos,setTodos]=useState([])
//      const [todos,setTodo]=useState('')

//      const handlechange=(e)=>{
//         const val=e.targetvalue;
//         setTodo(val)
//      }

//      const handleAddTodo=()=>{
//         setTodos([{
//             id:Date.now(),
//             todo:todo,
//             completed:false
//         }])
//         setTodo('')
//      }
//     return ( 
//         <div>TodoComponent
            
//             <input value={todo} type="text" placeholder="Todoname" onChange={handlechange}/>
//             <button onClick={handleAddTodo}>Add</button>
//         </div>

//         <div>
//             <div>
//                 <span>{item.todo}</span>
//                 <span>{item.completed ? "completed" : "pending"}</span>
//             </div>
//             <div>
//                 <input onChange={()=>{}} type="checkbox" checked={item.completed}/>
//                 <button>Delete</button>
//             </div>
//         </div>
//     )
// })}
// }
// export default TodoComponent