import React, { useState } from "react";
import { Wrapper, Header, H1, Underline, H2, Card } from "./styles";
import TodoForm from "../TodoForm/index";

function HomePage() {
  const [taskEntered, setTaskEntered] = useState([]);

  const addTasks = (tasks) => {
    fetch("https://todo-practice-a407e.firebaseio.com/tasks.json", {
      method: "POST",
      body: JSON.stringify(tasks),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setTaskEntered((prevTasks) => [
          ...prevTasks,
          { id: responseData.name, ...tasks },
        ]);
      });
  };

  return (
    <Wrapper>
      <Header>
        <H1>TODO APP</H1>
        <Underline />
      </Header>
      <TodoForm addTaskHandler={addTasks} />
      <H2>Your Tasks</H2>
      {taskEntered.map((ts) => (
        <Card key={ts.id}>
          {ts.task}
          {ts.time}
        </Card>
      ))}
    </Wrapper>
  );
}

export default HomePage;
