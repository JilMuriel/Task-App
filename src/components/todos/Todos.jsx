import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Todos.css";
import TodoItem from "./Todo-Item";

export const Todos = () => {
  const uid = uuidv4();
  const [todoDatas, setTodoDatas] = useState([
    {
      id: "01",
      title: "Login Page",
      priority: "Midium",
      startDate: "01/21/2021",
      endDate: "01/21/2021",
      completed: false,
    },
    {
      id: "02",
      title: "Login Page",
      priority: "Midium",
      startDate: "01/21/2021",
      endDate: "01/21/2021",
      completed: false,
    },
    {
      id: "02",
      title: "Login Page",
      priority: "Midium",
      startDate: "01/21/2021",
      endDate: "01/21/2021",
      completed: false,
    },
  ]);

  const addTodo = () => {
    setTodoDatas([
      ...todoDatas,
      {
        id: uid,
        title: "",
        priority: "",
        startDate: "",
        endDate: "",
        completed: false,
      },
    ]);
  };
  // //Form input state for every input tag
  // const [formInput, setFormInput] = useState("");
  // const handleOnChange = (todoItemData) => {
  //   const [id, title, priority, start, due, completed] = todoItemData;
  //   //update the data and update the title of the selected todo
  // };

  return (
    <div className="todos">
      <Box className="todos__header">
        <Grid container>
          <Grid item sm={3}>
            Task
          </Grid>
          <Grid item sm={3}>
            <Box textAlign="right">Importance</Box>
          </Grid>
          <Grid item sm={3}>
            <Box textAlign="right">Start Date</Box>
          </Grid>
          <Grid item sm={3}>
            <Box textAlign="right">Due Date</Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="todos__content">
        {todoDatas.map((todoItem, key) => (
          <TodoItem
            key={key}
            title={todoItem.title}
            priority={todoItem.priority}
            start={todoItem.startDate}
            due={todoItem.endDate}
          />
        ))}
      </Box>
      <Box>
        <Box
          className="btn__add"
          display="flex"
          alignItems="center"
          onClick={addTodo}
        >
          <AddIcon />
          Add Todo
        </Box>
      </Box>
    </div>
  );
};

export default Todos;
