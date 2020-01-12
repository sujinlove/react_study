# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 패키지 설치

   - yarn add react-router-dom
   - yarn add styled-components

2. 프로젝트 폴더 안에서 route 설치
3.

```
   yarn add react-router-dom
```

3. /src 폴더 안에서 App.css, index.css, logo.svg 삭제
4. App.js 파일과 index.js 파일에서 삭제한 파일 관련 구문 삭제
5. index.js 에서 라우터 구문 추가

   ```g
   import { BrowserRouter } from 'react-router-dom';
   ```

6. index.js 파일에서 <App />을 <BrowserRouter><App /></BrowserRouter> 로 수정
