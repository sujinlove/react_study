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
