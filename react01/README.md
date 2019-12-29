## 리액트 개발환경설정

Node.js

- npm 명령 - react가 내부적으로 테스트 환경 구동을 위해 사용
- Node.js 홈페이지 들어가서 안정버전 다운로드

Yarn - npm이 개선된 형태

- yarn 홈페이지 들어가서 다운로드
- 에디터 - vs code

## 패키지 관리자 ( npm, yarn )

개발과정에서 필요한 패키지의 다운로드, 업데이트, 제거 등을 담당하는 명령어

## 설치하기

- npm install 패키지 이름 —save
- 혹은
- yarn add 패키지 이름

## 삭제하기

- npm uninstall 패키지 이름 —save
- yarn remove 패키지 이름

## 리액트 프로젝트 생성하기

- npm create react-app 프로젝트 이름
- yarn create react-app 프로젝트 이름

## 생성된 프로젝트 실행하기

yarn start

## 02. VScode 확장기능 설치

### 1) 기본설치

- korean language Pack for visual studio code
- markdown all in one
- markdown preview github styling

### 2) Javascript 및 React 도구

- ESLint : 자바스크립트 문법 및 코드 스타일 검사 도구
- Reactjs Code Snippets : 리액트 컴포넌트 및 라이프 사이클 함수를 작성할 때 단축 단어를 사용하여 간편하게 코드를 자동으로 생성

### 3) ESLint 설정

''' npm install -g eslint
npm install --save-dev babel-eslint
npm install --save-dev eslint-plugin-react
'''

### 6) ES6 문법 인식을 위한 설정파일 추가

프로젝트 폴더에 .jshintrc 파일을 추가하고 아래의 내용을 명시한다.
'''js
{
"esversion": 6
}
'''
