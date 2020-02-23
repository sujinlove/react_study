# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 패키지 설지

   ```shell
   yarn add react-router-dom
   yarn add styled-components
   yarn add axios
   yarn add redux
   yarn add react-redux
   yarn add redux-actions
   yarn add redux-devtools-extension
   yarn add redux-thunk
   yarn add redux-logger
   ```

   `/src` 폴더 안에서 App.css, index.css, logo.svg 삭제
   App.js 파일과 index.js 파일에서 삭제한 파일 관련 구문 삭제
   index.js 파일에서 다음의 구문 추가

   ```js
   import { BrowserRouter } from "react-router-dom";
   ```

   index.js 파일에서 `<App />`을 `<BrowserRouter><App /></BrowserRouter>`으로 변경
   App.js 파일에 다음으 ㄹ추가

   ```js
   import { Route, Link, Switch } from "react-router-dom";
   ```

# 리덕스 스토어 구성하기

## 기능별 모듈(Reducer)을 결합할 준비

### /src/modules/index.js

폴더와 파일을 직접 생성한다

```js
import { combineReducers } from "redux";
```

#### 1) 리덕스를 위한 참조 추가

```js
// 리덕스에서 스토어 생성 함수와 미들웨어 처리 함수 가져오기
import { createStore, applyMiddleware } from "redux";

// 전체 App을 리덕스에 구독시키기 위해 Provider 라는 객체를 가져온다
import { Provider } from "react-redux";

// 크로 개발자 도구에 설치된 확장도구와 연동하기 위한 함수 (선택사항)
import { composeWithDevTools } from "redux-devtools-extension";

/* 미들웨어를 위한 참조 추가  */
// 미들웨어 불러오기
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

/* 리덕스 스토어에 등록시킬 모듈들 일괄 참조 */
// modules 폴더 (직접 생성해야함) 에 정의된 모든 action 과 action 생성 함수 및 초기 상태값들을 묶음으로 가져온다.
import { rootReducer } from "./modules";
```

#### 2) 리덕스 스토어 생성

```js
/* 리덕스 스토어 생성 */
// 로그를 생성하는 미들웨어 객체 만들기 --> 다른 미들웨어들 보다 우선적으로 적용하는 것이 좋다.
const logger = createLogger();

// --> 미들웨어가 크로 ㅁ개발자 도구 연동을 적용한 스토어 생성 ( 개발용 코드, 완성 후 기본코드로 전환 필요 )
const store = createStore(
  rooktReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);
```

#### 3) 렌더링 처리

렌더링 처리를 `<Provider store={store}>` 태그로 감싼다.

```js
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
```
