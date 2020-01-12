import React from "react";

import { Route, Link, Switch } from "react-router-dom";
import Sub1 from "./Sub1";
import Sub2 from "./Sub2";

const Main = () => {
  return (
    <div>
      <h2>Main</h2>

      <ul>
        <li>
          <Link to="/main/sub1">Go to Sub1</Link>
        </li>
        <li>
          <Link to="/main/sub2">Go to Sub2</Link>
        </li>
      </ul>

      <Switch>
        {/* 부모와 같은 URL을 적용받는 Sub Route 는 기본값으로 실행된다. */}
        <Route path={["/main", "/main/sub1"]} component={Sub1} />
        <Route path="/main/sub2" component={Sub2} />
      </Switch>
    </div>
  );
};

export default Main;
