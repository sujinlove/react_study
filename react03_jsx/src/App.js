import React from "react";

// yarn add react-router-dom
// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch 함수만 골라서 참조
import { Route, Link, Switch } from "react-router-dom";
import Expr1 from "./components/Expr1";

import If_1 from "./components/If_1";
import If_2 from "./components/If_2";
import If_3 from "./components/If_3";
import If_4 from "./components/If_4";

import Loop_1 from "./components/Loop_1";
import Loop_2 from "./components/Loop_2";
import Loop_3 from "./components/Loop_3";

/* 각 예제별 컴포넌트 import */

function App() {
  return (
    <div>
      <h1>03-jsx</h1>
      {/* Link 구성 */}
      <Link to="/expr">[ Expr1 ]</Link>

      <Link to="if1">[ If 1 ]</Link>
      <Link to="if2">[ If 2 ]</Link>
      <Link to="if3">[ If 3 ]</Link>
      <Link to="if4">[ If 4 ]</Link>

      <Link to="loop1">[ Loop 1 ]</Link>
      <Link to="loop2">[ Loop 2 ]</Link>
      <Link to="loop3">[ Loop 3 ]</Link>
      <hr />

      {/* 각 예제별 페이지 Route 적용 */}
      <Route path="/expr" component={Expr1} exact={true} />

      <Route path="/if1" component={If_1} />
      <Route path="/if2" component={If_2} />
      <Route path="/if3" component={If_3} />
      <Route path="/if4" component={If_4} />

      <Route path="/loop1" component={Loop_1} />
      <Route path="/loop2" component={Loop_2} />
      <Route path="/loop3" component={Loop_3} />
    </div>
  );
}

export default App;
