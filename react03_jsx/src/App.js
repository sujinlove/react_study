import React from "react";

// yarn add react-router-dom
// route 기능을 위한 패키지에서 Route 함수와 Link 함수, Switch 함수만 골라서 참조
import { Route, Link, Switch } from "react-router-dom";
import Expr1 from "./components/Expr1";

/* 각 예제별 컴포넌트 import */

function App() {
  return (
    <div>
      <h1>03-jsx</h1>
      {/* Link 구성 */}
      <Link to="/expr">Expr1</Link>
      <hr />

      {/* 각 예제별 페이지 Route 적용 */}
      <Route path="/expr" component={Expr1} exact={true} />
    </div>
  );
}

export default App;
