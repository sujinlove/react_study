import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./asset/css/style.css";
import MyState from "./components/MyState";
import MyEffect from "./components/MyEffect";

const App = () => {
  return (
    <div>
      <h2>hook event</h2>

      <NavLink
        className="normalLink"
        activeClassName="activeLink"
        to="/mystate"
      >
        MyState
      </NavLink>
      <NavLink
        className="normalLink"
        activeClassName="activeLink"
        to="/myeffect"
      >
        MyEffect
      </NavLink>

      <Switch>
        <Route path="/mystate" component={MyState} />
        <Route path="/myeffect" component={MyEffect} />
      </Switch>
    </div>
  );
};

export default App;
