import React from "react";

const MyCallback = () => {
  const [myText, setMyText] = React.useState("Hello React");

  // 입력값이 변경될 때 호출되는 이벤트 핸들러
  // const onInputChange = e => {
  //   setMyText(e.currentTarget.value);
  // };

  // 컴포넌트가 최초 렌더링 될때 1회만 이벤트 함수를 정의한다.
  // 이후 부터는 계속적으로 재사용된다.

  // 만약 두번째 파라미터인 배열에 특정 state 값을 지정할 경우
  // 해당 값이 수정될 때만 이벤트가 정의된다.

  // 성능 측면에서 보면 쓰면 좋은데 굳이 쓸필요없다..
  // 동작하는 화면도 동일하다.
  const onInputChange = React.useCallback(e => {
    setMyText(e.currentTarget.value);
  }, []);

  return (
    <div>
      <h2>myCallback</h2>

      <h3>{myText}</h3>

      <input type="text" placeholder="input..." onChange={onInputChange} />
    </div>
  );
};

export default MyCallback;
