import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./asset/css/style.css";
import MyState from "./components/MyState";
import MyEffect from "./components/MyEffect";
import StateEffectEx from "./components/StateEffectEx";

const App = () => {
  return (
    <div>
      <h2>hook event</h2>

      <NavLink
        className="normalLink"
        activeClassName="activeLink"
        to="/mystate"
      >
        [ MyState ]
      </NavLink>
      <NavLink
        className="normalLink"
        activeClassName="activeLink"
        to="/myeffect"
      >
        [ MyEffect ]
      </NavLink>

      <NavLink
        className="normalLink"
        activeClassName="activeLink"
        to="/stateeffectex"
      >
        [ StateEffectEx ]
      </NavLink>

      <Switch>
        <Route path="/mystate" component={MyState} />
        <Route path="/myeffect" component={MyEffect} />
        <Route path="/stateeffectex" component={StateEffectEx} />
      </Switch>
    </div>
  );
};

export default App;
