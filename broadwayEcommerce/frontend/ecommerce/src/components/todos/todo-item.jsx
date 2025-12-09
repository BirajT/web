export const TodoItem = ({ item, deleteTask, toggleComplete }) => {
  return (
    <div>
      <div>
        <span>{item.todo}</span>
        <span>{item.completed ? "  Completed" : " Pending"}</span>
      </div>
      <div>
        <label>
          <input
            onChange={() => {
              toggleComplete(item.id);
            }}
            type="checkbox"
            checked={item.completed}
          />
          {item.completed ? "Undo" : "Done"}
        </label>
        <button
          onClick={() => {
            deleteTask(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};