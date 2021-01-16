import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TaskContext = createContext();

export const taskData = [
  {
    taskId: "123123",
    taskTitle: "Item Test 01",
    taskList: [
      { id: "101", title: "eset test data 01", completed: false },
      { id: "102", title: "eset test data 02", completed: false },
    ],
  },
  {
    taskId: "33321",
    taskTitle: "Item Test 02",
    taskList: [
      { id: "01", title: "test data 01", completed: false },
      { id: "02", title: "test data 02", completed: false },
    ],
  },
];

export const TaskContextProvider = (props) => {
  // const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(taskData);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, []);

  const addTask = (title) => {
    setTasks([{ taskId: uuidv4(), taskTitle: title, taskList: [] }, ...tasks]);
    console.log("task", tasks);
  };
  const editTask = (id, title, todo) => {
    const newTasks = tasks.map((task) =>
      task.taskId === id
        ? { taskId: id, taskTitle: title, taskList: todo }
        : task
    );
    setTasks(newTasks);
  };
  const removeTask = (taskId) => {
    setTasks(tasks.filter((taskItem) => taskItem.taskId !== taskId));
  };

  //todo functions
  const addTodo = (id, todo, inputField) => {
    let { taskId, taskTitle, taskList } = todo;
    let newData = [
      { id: uuidv4(), title: inputField, completed: false },
      ...taskList,
    ];
    const upData = tasks.map((r) =>
      r.taskId === id ? { taskId, taskTitle, taskList: newData } : r
    );
    setTasks(upData);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        removeTask,
        addTodo,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
