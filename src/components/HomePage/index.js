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
  Para,
  Span,
  LinkSpan,
  Urgency,
  ButtonDiv,
  DeleteButton,
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
            urgency: responseData[key].urgency,
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

  const removeTasksHandler = (taskId) => {
    console.log(taskId);
    setTaskEntered((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskId)
    );
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
          <Card key={ts.id} test={ts.urgency}>
            <CardDetails>
              <TaskName>{ts.task}</TaskName>
              <Para>
                Time Assigned : <Span>{ts.time}</Span>
              </Para>
              <Para>
                Urgency : <Urgency test={ts.urgency}>{ts.urgency}</Urgency>
              </Para>
              <Para>
                Deadline Assigned :{" "}
                <Span>
                  {moment()
                    .add(parseInt(test[0]), test[1])
                    .format("dddd, MMMM Do YYYY")
                    .toLocaleString()}
                </Span>
              </Para>
              <Para>
                Having difficulties in completing this task try these{" "}
                <LinkSpan
                  onClick={() =>
                    (window.location.href = `https://www.youtube.com/results?search_query=${ts.task}`)
                  }
                >
                  Click Here
                </LinkSpan>{" "}
                or{" "}
                <LinkSpan
                  onClick={() =>
                    (window.location.href = `https://www.udemy.com/courses/search/?q=${ts.task}`)
                  }
                >
                  Click Here
                </LinkSpan>
              </Para>
              <ButtonDiv>
                <DeleteButton
                  type="button"
                  onClick={(id) => removeTasksHandler(ts.id)}
                >
                  Delete
                </DeleteButton>
              </ButtonDiv>
            </CardDetails>
          </Card>
        );
      })}
    </Wrapper>
  );
}

export default HomePage;
