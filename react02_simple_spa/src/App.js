import React from "react";

// router 기능을 위한 패키지에서 Route 함수와 Link 함수만 골라서 참조
import { Route, Link } from "react-router-dom";

import Home from "./components/Home"; // 각 컴포넌트가 페이지 역할을 할 것임.
import About from "./components/About";
import DepartmentGet from "./components/DepartmentGet";

const App = () => {
  return (
    <div>
      <h1>simple page application</h1>

      {/*--- <a> : 페이지 이동 / <Link> : 컴포넌트가 변경 */}
      <Link to="/">[ Home ]</Link>
      <Link to="/about">[ About ]</Link>

      {/* HTTPS GET 파라미터를 포함하는 링크 구성 ( 한글사용 X ) */}
      <Link to="/department_get?deptno=101&msg=hello">[ DepartmentGet 1 ]</Link>
      <Link to="/department_get?deptno=102&msg=world">[ DepartmentGet 2 ]</Link>

      {/* ------ 페이지로 사용될 컴포넌트들 명시하기 ------ */}
      {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}

      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/department_get" component={DepartmentGet} />
    </div>
  );
};

export default App;
