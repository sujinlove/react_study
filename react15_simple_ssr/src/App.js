import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Simple SSR</h1>

      <NavLink to="/"></NavLink>

      <Switch></Switch>
    </div>
  );
};

export default App;
