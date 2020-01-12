import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import MyProps from "./components/MyProps";
import MyPropTypes from "./components/MyPropTypes";

const App = () => {
  const myStyle = {
    fontWeight: "bold",
    color: "#b82514",
    textDecoration: "none"
  };

  return (
    <div className="App">
      <h1>05-component</h1>

      {/* NavLink는 현재 머물고 있는 URL에 적용할 CSS를 지정할 수 있다. */}
      <NavLink activeStyle={myStyle} to="/myprops">
        [ MyProps ]
      </NavLink>
      <NavLink activeStyle={myStyle} to="/myproptypes">
        [ MyPropTypes ]
      </NavLink>

      <Switch>
        <Route path="/myprops" component={MyProps} />
        <Route path="/myproptypes" component={MyPropTypes} />
      </Switch>
    </div>
  );
};

export default App;
