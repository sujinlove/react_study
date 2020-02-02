import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

/*
프로그램 본체 

아래의 구조로 연결됨.
App -- (route) --> NewsPage --> Category
                            --> NewsList --> NewsItem
*/

const App = () => {
  return (
    <div>
      <h1>Simple Ajax</h1>

      <switch>
        {/* Path 파라미터로 카테고리 값을 받는 페이지 구성 */}
        {/* :/변수이름? 에서 물음표는 해당 변수가 선택적이라는 의미 */}
        {/* 즉 ? 의 의미는, / 뒤에 값이 없어도 NewsPage를 실행하라는 의미 */}
        {/*  ? 가 없으면 / 뒤에 category가 반드시 있어야 NewsPage가 실행된다. */}

        <Route path="/:category?" component={NewsPage} />
      </switch>
    </div>
  );
};

export default App;
