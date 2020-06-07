import React, { useState } from "react";
import { FormWrapper, Form, Input, Button } from "./styles";

function TodoForm(props) {
  const [taskEntered, setTaskEntered] = useState("");
  const [timeEntered, setTimeEntered] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addTaskHandler({ task: taskEntered, time: timeEntered });
    console.log("Success");
  };
  return (
    <FormWrapper>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          value={taskEntered}
          onChange={(event) => setTaskEntered(event.target.value)}
          placeholder="Add Task here..."
        />
        <Input
          type="text"
          value={timeEntered}
          onChange={(event) => setTimeEntered(event.target.value)}
          placeholder="Completion time"
        />
        <Button type="submit">ADD TASK</Button>
      </Form>
    </FormWrapper>
  );
}

export default TodoForm;
