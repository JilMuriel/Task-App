import React, { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { TaskContext } from "../../../context";

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskInput);
    setTaskInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="Task Title"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;
