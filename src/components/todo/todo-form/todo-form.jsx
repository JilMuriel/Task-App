import React from "react";

export const TodoForm = () => {
  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(id, items, todoInput);
    setTodoInput("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add Todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
    </form>
  );
};
