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
  };
  return (
    <FormWrapper>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="text"
          value={taskEntered}
          onChange={(event) => setTaskEntered(event.target.value)}
          placeholder="Add Task here..."
          required
        />
        <Input
          type="text"
          value={timeEntered}
          onChange={(event) => setTimeEntered(event.target.value)}
          placeholder="Time Needed(e.g 2 days)"
          required
        />
        <Input
          type="text"
          list="urgency-list"
          value={urgency}
          onChange={(event) => setUrgency(event.target.value)}
          placeholder="Enter Urgency"
          required
        />
        <datalist id="urgency-list">
          <option value="High" />
          <option value="Normal" />
          <option value="Low" />
        </datalist>

        <Button type="submit">ADD TASK</Button>
      </Form>
    </FormWrapper>
  );
}

export default TodoForm;
