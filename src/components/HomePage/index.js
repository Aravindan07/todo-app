import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Wrapper,
  Header,
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
import LoaderIcon from "../../Loader/index";

function HomePage() {
  const [taskEntered, setTaskEntered] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    fetch("https://todo-practice-a407e.firebaseio.com/tasks.json")
      .then((response) => {
        setLoaded(false);
        return response.json();
      })
      .then((responseData) => {
        const loadedTasks = [];
        for (let key in responseData) {
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
    setLoaded(true);
    fetch("https://todo-practice-a407e.firebaseio.com/tasks.json", {
      method: "POST",
      body: JSON.stringify(tasks),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setLoaded(false);
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
    setLoaded(true);
    fetch(`https://todo-practice-a407e.firebaseio.com/tasks/${taskId}.json`, {
      method: "DELETE",
    }).then((response) => {
      setLoaded(false);
      setTaskEntered((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    });
  };

  return (
    <Wrapper>
      <Header>
        <h1>TASK SAVER</h1>
      </Header>
      <TodoForm addTaskHandler={addTasks} />
      {loaded && taskEntered.length > 0 ? <LoaderIcon /> : null}
      {taskEntered.length === 0 ? null : (
        <>
          <H2>Your Tasks</H2>
          <TasksUnderline />
        </>
      )}
      {taskEntered.map((ts) => {
        let Deadline = ts.time;
        let DeadlineOf0 = Deadline.split("")[0];
        let DeadlineOfRemaining = Deadline.split("").slice(1).join("").trim();
        return (
          <Card key={ts.id} urgency={ts.urgency}>
            <CardDetails>
              <TaskName>{ts.task}</TaskName>
              <Para>
                Time Assigned : <Span>{ts.time}</Span>
              </Para>
              <Para>
                Urgency : <Urgency urgency={ts.urgency}>{ts.urgency}</Urgency>
              </Para>
              <Para>
                Deadline Assigned :{" "}
                <Span>
                  {moment()
                    .add(parseInt(DeadlineOf0), DeadlineOfRemaining)
                    .format("dddd, MMMM Do YYYY")
                    .toLocaleString()}
                </Span>
              </Para>
              <Para>
                Having difficulties in completing this task try this resource{" "}
                <LinkSpan
                  onClick={() =>
                    (window.location.href = `https://www.youtube.com/results?search_query=${ts.task}`)
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
