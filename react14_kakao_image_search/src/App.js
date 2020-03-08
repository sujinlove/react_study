import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import ImageSearch from "./pages/ImageSearch";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/:query?" component={ImageSearch} />
      </Switch>
    </div>
  );
};

export default App;
