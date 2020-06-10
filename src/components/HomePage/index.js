import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Wrapper,
  Header,
  H1,
  Underline,
  H2,
  TasksUnderline,
  Card,
  CardDetails,
  TaskName,
} from "./styles";
import TodoForm from "../TodoForm/index";

function HomePage() {
  const [taskEntered, setTaskEntered] = useState([]);

  useEffect(() => {
    fetch("https://todo-practice-a407e.firebaseio.com/tasks.json")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        const loadedTasks = [];
        for (let key in responseData) {
          console.log(key);
          loadedTasks.push({
            id: key,
            task: responseData[key].task,
            time: responseData[key].time,
          });
        }
        setTaskEntered(loadedTasks);
      });
  }, []);

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
      {taskEntered.length === 0 ? null : (
        <>
          <H2>Your Tasks</H2>
          <TasksUnderline />
        </>
      )}
      {taskEntered.map((ts) => {
        let test = ts.time.split(" ");
        return (
          <Card key={ts.id}>
            <CardDetails>
              <TaskName>{ts.task}</TaskName>
              <span>Time Assigned : {ts.time}</span>
              <p>
                Make sure you complete it before{" "}
                {moment()
                  .add(parseInt(test[0]), test[1])
                  .format("dddd, MMMM Do YYYY")
                  .toLocaleString()}
              </p>
              <p>This will help you in achieving your goals :</p>
            </CardDetails>
          </Card>
        );
      })}
    </Wrapper>
  );
}

export default HomePage;
