export const TodoInput = ({todo , handleChange , handleAddTodo}) => {
  return (
    <div>
        <input
          value={todo}
          type="text"
          placeholder="Todo name"
          onChange={handleChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
  );
};