import { TodoItem } from "./todo-item";

export const TodoList = ({ todos, clearList, toggleComplete, deleteTask }) => {
  return (
    <div>
      {/* if todo is empty */}
      {todos.length == 0 && <p>No Todos Added yet</p>}

      {todos.length > 0 && <button onClick={clearList}>Clear List</button>}

      {todos.length > 0 &&
        todos.map((item) => (
          <TodoItem
            item={item}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
    </div>
  );
};