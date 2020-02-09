// 예제 5를 컴포넌트로 구현하기
import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import MyProps from "./components/MyProps";
import MyPropTypes from "./components/MyPropTypes";
import MyChildren from "./components/MyChildren";

import MyState from "./components/MyState"; // hook 의 useState component

class App extends React.Component {
  // Inline CSS 를 리턴하기 위한 getter 함수 정의
  get myStyle() {
    return {
      fontWeight: "bold",
      color: "#bc82514",
      textDecoration: "none"
    };
  }
  /**
   * 화면에 렌더링할 JSX 내용을 리턴하는 함수
   */
  render() {
    return (
      <div>
        <h1>08-class-Component</h1>

        {/* NavLink는 현재 머물고 있는 URL에 적용할 CSS를 지정할 수 있다. */}
        <NavLink activeStyle={this.myStyle} to="/myprops">
          [ MyProps ]
        </NavLink>
        <NavLink activeStyle={this.myStyle} to="/myproptypes">
          [ MyPropTypes ]
        </NavLink>
        <NavLink activeStyle={this.myStyle} to="/mychidren">
          [ MyChildren ]
        </NavLink>

        <NavLink activeStyle={this.myStyle} to="/mystate">
          [ MyState ]
        </NavLink>

        <Switch>
          <Route path="/myprops" component={MyProps} />
          <Route path="/myproptypes" component={MyPropTypes} />
          <Route path="/mychidren" component={MyChildren} />
          <Route path="/mystate" component={MyState} />

          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
