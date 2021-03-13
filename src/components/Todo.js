import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleComplete, removeTodo }) {
  function checkboxClick() {
    toggleComplete(todo.id);
  }

  function deleteTodo() {
    removeTodo(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={checkboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={deleteTodo}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default Todo;
