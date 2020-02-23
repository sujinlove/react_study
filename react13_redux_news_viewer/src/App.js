import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <div>
      <h1>Redux News Viewer</h1>
      <Switch>
        {/** Path 파라미터로 카테고리 값을 받는 페이지 구성 */}
        <Route path="/:category?" component={NewsPage} />
      </Switch>
    </div>
  );
};

export default App;
