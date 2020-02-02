import React from "react";

const MyRef = () => {
  // javascript 에서는 Document.getById() 를 사용해 element에 접근이 가능하다.
  // 하지만 react 에서는 사용할 수 없기 때문에 useRef 를 사용한다.

  //
  // 1. HTML 태그를 react 안에서 참조할 수 있는 변수를 생성
  const myLabelRef = React.useRef();
  const myInputRef = React.useRef();

  // 2. 출력을 목적으로 하는 참조 변수 생성
  // 일반적인 출력을 위한 변수도 hook 을 이용해 만들어야 한다..
  const myName = React.useRef("리액트");

  console.log("컴포넌트 구동시 :: " + myName.current);

  return (
    <div>
      <h2>MyRef</h2>

      <h3 ref={myLabelRef}>...</h3>

      <h4>{myName.current}</h4>

      {/* 미리 준비한 컴포넌트 참조변수와 HTML 변수를 연결 */}
      <input type="text" ref={myInputRef} />
      {/* 버튼 클릭시 input 내용을 alert()으로 표시 후 입력 내용 지움 */}
      <button
        onClick={e => {
          console.log(myInputRef);
          //console.log(myInputRef.current.value);
          myLabelRef.current.innerHTML = myInputRef.current.value;

          // myName 은 state 값이 아니므로 값을 변경한다구 해서 화면에 즉시 반영되지는 않는다.
          myName.current = myInputRef.current.value;
          myInputRef.current.value = "";

          console.log("이벤트 발생시 :: " + myName.current);
        }}
      >
        Click!
      </button>
    </div>
  );
};

export default MyRef;
