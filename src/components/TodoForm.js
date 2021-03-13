import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { TextField, Button } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function inputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form className="todoForm" onSubmit={submit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={inputChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
