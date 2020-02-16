import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

/* 리덕스를 위한 참조 추가 */

// 리덕스에서 스토어 생성 함수 가져오기
import { createStore } from "redux";

// 전체 App을 리덕스에 구독시키기 위해 Provider라는 객체를 가져온다,
import { Provider } from "react-redux";

// 크롬 개발자 도구에 설치된 확장도구와 연동하기 위한 함수
import {
  ComposeWithDevTools,
  composeWithDevTools
} from "redux-devtools-extension";

// modules 폴더 (직접 생성해야함) 에 정의된 모든 action과 action 생성 함수 및 초기값들을 묶음으로 가져온다.
import rootReducer from "./modules.js";

/** 스토어 생성 */
// --> 스토어 생성 기본코드 (서비스용)
// const store = createStore(rookReducer);
// --> 크롬 개발자도구와 연계하기위한 스토어 생성 기본 코드 (개발용)

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
