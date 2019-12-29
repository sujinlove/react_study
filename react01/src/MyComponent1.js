import React from "react";

// 내가 작성한 컴포넌트 참조 --> 정의한 이름을 HTML 태그처럼 사용할 수 있다.
import MySubComponent from "./MySubComponent";

/* 함수형 컴포넌트 정의 
    - 함수이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적
*/

function MyComponent1() {
  // 리턴은 항상 HTML 구조를 의미하는 JSX 문법이어야 하고,
  // JSX 구조는 무조건 단 하나의 태그요소만 반환해야 함.
  // --> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미
  return (
    <div>
      <h2>안녕하세요 리액트</h2>
      <p>리액트 컴포넌트 구조 연습입니다.</p>

      {/* 컴포넌트는 재사용 가능함 */}
      <MySubComponent />
      <MySubComponent />
      <MySubComponent />
    </div>
  );
}

export default MyComponent1;
