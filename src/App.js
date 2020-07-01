import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/index";
import LoginForm from "./containers/LoginForm/index";
// import Tasks from "./components/Tasks/index";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/tasks" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
