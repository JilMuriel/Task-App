import React, { useContext, useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ClearIcon from "@material-ui/icons/Clear";
// import { TaskContext } from "./context/store";
import CreateIcon from "@material-ui/icons/Create";
export const TodoItem = ({ item }) => {
  // const { removeTask, doneTask, editTask } = useContext(TaskListContext);
  const { id, title, completed } = item;
  // const [textField, setTextField] = useState(title);
  // const [hidden, setHidden] = useState(false);

  // const [check, setCheck] = useState(status);

  // const handleTaskDone = () => {
  //   doneTask(id, title, check);
  // };
  // const handleUpdate = (event) => {
  //   event.preventDefault();
  //   editTask(id, textField, status);
  //   setHidden(!hidden);
  // };
  // const handleChange = (e) => {
  //   setTextField(e.target.value);
  // };

  // useEffect(handleTaskDone, [check]);

  // const handleClick = (event) => {
  //   setCheck(event.target.checked);
  // };

  return (
    <div className="todo-item">
      <FormControlLabel
        control={
          <Checkbox />
          // <>

          //   {hidden ? (
          //     <form onSubmit={handleUpdate}>
          //       <input type="text" value={textField} onChange={handleChange} />
          //     </form>
          //   ) : null}
          // </>
        }
        label={title}
      ></FormControlLabel>
      <div className="btn-group">
        <button className="todo-btn">
          <CreateIcon />
        </button>
        <button className="todo-btn">
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
