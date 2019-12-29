# SPA ( Single Page Application )

## 프로젝트 생성 및 실행

1. yarn create react-app project_name
2. yarn add react-router-dom
3. yarn start

## 프로젝트 생성 후 기초 작업

1. .jshintrc 파일생성
2. src 폴더 하위에서 App.css와 index.css, logo.svg 삭제
3. App.js 파일에서 App.css 와 logo.svg 참조 구문 제거
4. index.js에서 App.css 와 logo.svg 참조 구문 제거

## Single Page Application

하나의 HTML 페이지로 다수의 페이지 효과를 내는 구현 방식.
js 파일로 웹 페이지 화면을 변경하는 형태로 구현된다.

## Router

분배하는 기능을 수행하는 소프트웨어나 하드웨어
대표적인 라우터로는 아이피 공유기강 ㅣㅆ다.

React의 Router는 URL에 의해 컴포넌트를 분배하는 기능을 한다.
HTML5 에서 Javascript에 추가된 기능 중 history 객체를 통해 URL을 변조하는 기능이 있다,

리액트의 Router는 이 기능을 활용하여 현재 패이지의 URL을 다양하게 변조하여 거기에 각각의 컴포넌트를 분배한다.

## SPA 개발의 장점

- 페이지 이동 없이 화면이 갱신되므로 실제로 네트워크 통신이 발생하지 않아 화면 갱신 속도가 빠르다.

## SPA 개발의 단점

- JS 코드가 비대해 질 수 있다. 코드 스플리팅 기법으로 해결 가능 ( 분할 코드 작성 )
- 하나의 HTML이므로 SEO에 취약하다 ( 서버사이드 렌더링으로 해결 가능 )
- 서버사이드 렌더링 = React + Node / React + PHP / React + Java(Spring)
