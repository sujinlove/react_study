import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./asset/css/style.css";
import MyState from "./components/MyState";

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

      <Switch>
        <Route path="/mystate" component={MyState} />
      </Switch>
    </div>
  );
};

export default App;
