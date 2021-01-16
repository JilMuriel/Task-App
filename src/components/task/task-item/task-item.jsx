import React, { useState, useContext } from "react";
import { TaskContext } from "../../../context";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Todos from "../../todo/todos";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});
export const TaskItem = ({ ...item }) => {
  const { id, title, todos, handleRemove } = item;
  const { editTask } = useContext(TaskContext);
  const classes = useStyles();
  const [editField, setEditField] = useState(false);
  const [editTextField, setEditTextField] = useState(title);

  const handleUpdate = (e) => {
    e.preventDefault();
    editTask(id, editTextField, todos.taskList);
    setEditField(!editField);
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {editField ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                value={editTextField}
                onChange={(e) => setEditTextField(e.target.value)}
              />
            </form>
          ) : (
            title
          )}
        </Typography>
        {editField ? (
          <button onClick={handleUpdate}>save</button>
        ) : (
          <button onClick={() => setEditField(!editField)}>edit</button>
        )}
        <button onClick={() => handleRemove(id)}>delete</button>
        <br />
        <br />
        <Todos id={id} items={todos} />
      </CardContent>
    </Card>
  );
};

export default TaskItem;
