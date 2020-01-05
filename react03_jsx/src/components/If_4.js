import React from "react";

const If_4 = () => {
  /* 삼항 연산자를 사용한 조건 분기 */
  // { 조건 ? (조건이 참인 경우 출력할 내용) : (조건이 거짓인 경우 출력할 내용) }
  // 조건이 거짓인 경우를 사용하고자 하지 않다면 null 사용
  // ex) { point === 80 ? ( true ... ) : ( false ... ) }

  const isLogin = true;

  return (
    <div>
      <h2>If 4</h2>
      {isLogin === true ? (
        <button type="button">Logout</button>
      ) : (
        <button type="button">Login</button>
      )}
    </div>
  );
};

export default If_4;
