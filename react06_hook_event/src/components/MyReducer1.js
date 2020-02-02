import React from "react";

/*
 * useReducer에 의해 호출될 사용자 정의 함수
 * --> action 값이 0 일때, state 값을 ~~ 해라.
 * --> action 값의 DataType은 개발자가 결정할 수 있다 (int, string, boolean, json ... )
 * --> state 값의 Data Type 역시 개발자가 결정할 수 있다. (int, string, boolean, json ... )
 * @param {int} state - 상태값 ( useState의 state값과 동일 )
 * @param {string} action - 어떤 동작인지에 대한 구분
 */

// 질문1, setCounterValue는 기본적으로 state 값이 매개변수 첫번째로 들어가는가?
// 질문2, 그래서 setCounterValue 변수로 action만 보내는건가?

function setCounterValue(state, action) {
  console.log("[%o] %o", action, state);

  switch (action) {
    case "HELLO":
      return state + 1;
    case "WORLD":
      return state - 1;
    default:
      return state;
  }
}

const MyReducer1 = () => {
  /*
상태값 ( myCounter )와 상태값 갱신함수 (setMyCounter)를 정의한다.
-> steMyCounterValue: setMyCounter()가 호출됨 상황에 따라 간접적으로 호출될 함수
-> 0 : myCounter에 저장될 초기값

setMyCounter() 함수에게 action 값을 전달하면
React 내부적으로 setMyCounterValue 함수가 호출되면
상태값으로 지정된 myCounter와 "HELLO", "WOLRD" 가 파라미터터로 전달된다.
*/

  const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);

  return (
    <div>
      <h2>MyReducer1</h2>
      <p>현재 카운트 값 : {myCounter}</p>
      <button type="button" onClick={e => setMyCounter("HELLO")}>
        UP
      </button>
      <button type="button" onClick={e => setMyCounter("WORLD")}>
        DOWN
      </button>
    </div>
  );
};

export default MyReducer1;
