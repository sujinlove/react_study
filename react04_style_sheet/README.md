# 프로젝트 생성 후 초기화 작업

1. 프로젝트 폴더 안에서 route 설치
   '''js
   yarn add react-router-dom
   '''

2. /src 폴더 안에서 App.css, index.css, logo.svg 삭제
3. App.js 파일과 index.js 파일에서 삭제한 파일 관련 구문 삭제
4. index.js 에서 라우터 구문 추가
   '''js
   import { BrowserRouter } from 'react-router-dom';
   '''

5. index.js 파일에서 <App />을 <BrowserRouter><App /></BrowserRouter> 로 수정
