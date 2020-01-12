import React from "react";

// router 기능을 위한 패키지에서 Route 함수와 Link 함수만 골라서 참조
import { Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home"; // 각 컴포넌트가 페이지 역할을 할 것임.
import About from "./components/About";
import DepartmentGet from "./components/DepartmentGet";
import DepartmentPath from "./components/DepartmentPath";
import Error404 from "./components/Error404";

const App = () => {
  return (
    <div>
      <h1>simple page application</h1>

      {/*--- <a> : 페이지 이동 / <Link> : 컴포넌트가 변경 */}
      <Link to="/">[ Home ]</Link>
      <Link to="/about">[ About (1) ]</Link>
      <Link to="/introduce">[ About (2) ]</Link>

      {/* HTTPS GET 파라미터를 포함하는 링크 구성 ( 한글사용 X ) */}
      <Link to="/department_get?deptno=101&msg=hello">[ DepartmentGet 1 ]</Link>
      <Link to="/department_get?deptno=102&msg=world">[ DepartmentGet 2 ]</Link>

      {/* Path 파라미터를 포함하는 링크 구성 */}
      <Link to="/department_path/201/hello">[ DepartmentPath 1 ]</Link>
      <Link to="/department_path/202/world">[ DepartmentPath 2 ]</Link>

      {/* ------ 페이지로 사용될 컴포넌트들 명시하기 ------ */}
      {/* 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
      <Switch>
        <Route path="/" component={Home} exact={true} />

        {/* 한페이지에 두 개 이상의 URL을 적용할 경우 배열 형시으로 처리함 */}
        <Route path={["/about", "/introduce"]} component={About} />
        <Route path="/department_get" component={DepartmentGet} />

        {/* Path 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
        <Route
          path="/department_path/:deptno/:msg"
          component={DepartmentPath}
        />

        {/* path 속성 없이 Route 지정 -> 지정되지 않은 모든 요청에 반응 */}
        {/* 그리고 모든 route를 <Switch> 안에 위치시켜야 한다. 그리고 switch tag import */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
};

export default App;
