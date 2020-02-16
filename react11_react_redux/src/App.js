import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import NormalCounter from "./components/NormalCounter";

const App = () => {
  const myStyle = {
    fontWeight: "bold",
    color: "#b82514",
    textDecoration: "none"
  };

  return (
    <div>
      <h1>React Redux</h1>

      <NavLink activeStyle={myStyle} to="/normal_counter">
        [ NormalCounter ]
      </NavLink>

      <Switch>
        <Route path="/normal_counter" component={NormalCounter} />
      </Switch>
    </div>
  );
};

export default App;
