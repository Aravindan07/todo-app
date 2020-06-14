import React, { useState } from "react";
import { FormWrapper, Form, Input, Button } from "./styles";

function TodoForm(props) {
  const [taskEntered, setTaskEntered] = useState("");
  const [timeEntered, setTimeEntered] = useState("");
  const [urgency, setUrgency] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.addTaskHandler({
      task: taskEntered,
      time: timeEntered,
      urgency: urgency,
    });
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
        <Input
          type="text"
          value={urgency}
          onChange={(event) => setUrgency(event.target.value)}
          placeholder="Enter Urgency e.g Immediate"
        />
        <Button type="submit">ADD TASK</Button>
      </Form>
    </FormWrapper>
  );
}

export default TodoForm;
