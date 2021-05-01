import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import State from "./screens/State";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/state/:stateCode">
          <State />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
