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

## 변수 전달 note

ex)
https://comic.naver.com/webtoon/weekdayList.nhn?week=fri
https://comic.naver.com/webtoon/weekdayList.nhn?week=fri
https://comic.naver.com/webtoon/weekdayList.nhn?week=fri

- ? 를 기준으로 뒤에오는 문자열은 변수 / ?이름=값&이름=값 ...
- HTTP GET 파라미터, QueryString 방식이라고 한다.
- javascript에서는 search라는 함수로 변수값을 배열로 받을 수 있다.

'''html

<form method="get" action="hello.jsp">
    <input type="text" name="a" />
    <input type="text" name="b" />
    <button type="submit">click</button>
</form>
'''

action 속성이 지정된 페이지에 입력값이 전송된다.
hello.jsp?a=입력값&b=입력값
만약 로그인 등 보안이 중요한 페이지의 경우 get방식이 아니라 post방식으로 해야한다.

'''js
const arr = [1, 2, 3, 4, 5];
const find = 3;

// 배열의 원소 수만큼 콜백함수를 실행함
arr.forEach(function(v, i) {
console.log("%d번째 원소 %d",i,v);

// 원소 수 만큼 함수를 호출하는 것이므로
// 중단을 위해 return 을 해도 해당 원소에 대해서만 적용되기 때문에 모든 원소를 실행함,,,
// 즉 원소를 다 돌때까지 for문을 중단시킬 수 없다.
// 하지만 some은 가능함.
// arr.some(function(v, i) {})

if (find === v) {
console.log('찾음');
return;
}
});

'''

---

### 오늘까지 공부한 내용

1. 리액트 컴포턴트로 페이지 나누기
2. HTTP GET 파라미터 처리하기
3. PATH 파라미터 처리하기
4. 404 에러 대비하기

### 앞으로 공부할 내용

1. NavLink 를 사용하여 현재 머물고 있는 링크에 CSS 적용하기
   --> 컴포넌트에 css 적용하는 방법 학습 후 공부
2. History 제어하기
   --> 컴포넌트 라이프사이클과 hook 학습 후 공부
