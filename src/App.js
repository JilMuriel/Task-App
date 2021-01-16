import React from "react";
// import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { TaskContextProvider } from "./context";
import Task from "./components/task/task";
import Container from "@material-ui/core/Container";

function App() {
  // const [task, setTask] = useState([
  //   {
  //     taskId: "123123",
  //     taskTitle: "Item Test 01",
  //     taskList: [
  //       { id: "101", title: "eset test data 01", completed: false },
  //       { id: "102", title: "eset test data 02", completed: false },
  //     ],
  //   },
  //   {
  //     newData: "33321",
  //     taskTitle: "Item Test 02",
  //     taskList: [
  //       { id: "01", title: "test data 01", completed: false },
  //       { id: "02", title: "test data 02", completed: false },
  //     ],
  //   },
  // ]);
  // const [taskInput, setTaskInput] = useState("");
  //todo input
  // const [todoInput, setTodoInput] = useState("");

  // const handleAddTask = (e) => {
  //   e.preventDefault();
  //   setTask([
  //     { taskId: uuidv4(), taskTitle: taskInput, taskList: [] },
  //     ...task,
  //   ]);
  //   setTaskInput("");
  // };

  // const handleRemoveTask = (taskId) => {
  //   const removedData = task.filter((taskItem) => taskItem.taskId !== taskId);
  //   setTask(removedData);
  // };

  // const hadleUpdateTask = (task) => {
  //   const { taskId, title, taskList } = task;
  //   const eData = task.map((item) =>
  //     item.taskId === taskId ? { taskId, title: title, taskList } : item
  //   );
  //   setTask(eData);
  // };

  // const hanleAddTodo = (todo) => {
  //   let { taskId, taskTitle, taskList } = todo;
  //   let newData = [
  //     ...taskList,
  //     { id: uuidv4(), title: todoInput, completed: false },
  //   ];
  //   const upData = task.map((r) =>
  //     r.taskId === taskId ? { taskId, taskTitle, taskList: newData } : r
  //   );
  //   setTask(upData);
  // };

  // const handleUpdateSubTodo = (todo, subtask) => {
  //   let { taskId, taskTitle, taskList } = todo;
  //   let { id, title, completed } = subtask;
  //   let newData = taskList.map((taskItem) =>
  //     taskItem.id === id ? { id, title, completed: !completed } : taskItem
  //   );
  //   const upData = task.map((r) =>
  //     r.taskId === taskId ? { taskId, taskTitle, taskList: newData } : r
  //   );
  //   setTask(upData);
  // };
  // const handleRemoveSubTask = (todo, subtask) => {
  //   let { taskId, taskTitle, taskList } = todo;
  //   let { id } = subtask;
  //   let newData = taskList.filter((taskItem) => taskItem.id !== id);
  //   const upData = task.map((r) =>
  //     r.taskId === taskId ? { taskId, taskTitle, taskList: newData } : r
  //   );
  //   setTask(upData);
  // };
  return (
    // <div className="App">
    //   <form onSubmit={handleAddTask}>
    //     <input
    //       type="text"
    //       value={taskInput}
    //       onChange={(e) => setTaskInput(e.target.value)}
    //       placeholder="add Task Group"
    //     />
    //     <button>submit</button>
    //   </form>

    //   <div className="list__container">
    //     {task.length === 0
    //       ? "No Data"
    //       : task.map((item, key) => (
    //           <div key={key}>
    //             <h6>{<span>Title:{item.taskTitle}</span>}</h6>

    //             <button onClick={() => hadleUpdateTask(item)}>
    //               Edit Title
    //             </button>
    //             <button onClick={() => handleRemoveTask(item.taskId)}>
    //               Delete
    //             </button>
    //             <div>
    //               <input
    //                 type="text"
    //                 value={todoInput}
    //                 onChange={(e) => setTodoInput(e.target.value)}
    //               />
    //               <button onClick={() => hanleAddTodo(item)}>add todo</button>
    //             </div>
    //             <ul>
    //               {item.taskList.map((taskItem, key) => (
    //                 <li key={key}>
    //                   <label>
    //                     <span>{taskItem.title}</span>
    //                     <input
    //                       type="checkbox"
    //                       checked={taskItem.completed}
    //                       onChange={() => handleUpdateSubTodo(item, taskItem)}
    //                     />
    //                     <button
    //                       onClick={() => handleRemoveSubTask(item, taskItem)}
    //                     >
    //                       remove
    //                     </button>
    //                   </label>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         ))}
    //   </div>
    // </div>

    <TaskContextProvider>
      <Container>
        <h1>Task</h1>
        <Task />
      </Container>
    </TaskContextProvider>
  );
}

export default App;
