import React, { useState, useContext } from "react";
import { TaskContext } from "../../context";
import { TodoItem } from "../todo/todo-item/todo-item";

export const Todos = ({ ...props }) => {
  const { addTodo } = useContext(TaskContext);
  const { id, items } = props;
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(id, items, todoInput);
    setTodoInput("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
      </form>
      {items.taskList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </div>
  );
};

export default Todos;
