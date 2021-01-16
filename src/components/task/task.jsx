import React, { useContext } from "react";
import { TaskContext } from "../../context";
import Grid from "@material-ui/core/Grid";
import TaskItem from "./task-item/task-item";

import TaskForm from "./task-form/task-form";

export const Task = () => {
  const { tasks, removeTask } = useContext(TaskContext);
  return (
    <>
      <TaskForm />
      <br />
      <Grid container spacing={3}>
        {tasks.map((taskItem) => (
          <Grid item xs={3}>
            <TaskItem
              id={taskItem.taskId}
              title={taskItem.taskTitle}
              todos={taskItem}
              handleRemove={removeTask}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Task;
