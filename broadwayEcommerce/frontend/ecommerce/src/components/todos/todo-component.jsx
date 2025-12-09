import { useEffect, useState } from "react";
import { TodoInput } from "./todo-input";
import { TodoList } from "./todo-list";

const TodoComponent = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todo, setTodo] = useState("");

  //! input change handler function
  const handleChange = (e) => {
    const val = e.target.value;
    setTodo(val);
  };

  //! store todos on local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //! add button click handler function
  const handleAddTodo = () => {
    if (todo.trim() === "") {
      alert("Task is required");
      return;
    }
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          todo: todo,
          completed: false,
        },
      ];
    });
    setTodo("");
  };

  // ! delete task
  const deleteTask = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  //! toggle complete

  const toggleComplete = (id) => {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const clearList = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  return (
    <div>
      {/* todo inut  */}
      <TodoInput
        todo={todo}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
      />

      {/* list todos */}
      <TodoList
        clearList={clearList}
        deleteTask={deleteTask}
        todos={todos}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default TodoComponent;