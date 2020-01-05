import React from "react";

const If_1 = () => {
  /* 조건에 따라 다른 jsx를 반환하는 함수 정의 */

  function btnLogin(isLogin) {
    if (isLogin === true) {
      return <button type="button">Logout</button>;
    } else {
      return <button type="button">Login</button>;
    }
  }

  return (
    <div>
      <h2>If 1</h2>
      {btnLogin(true)}
    </div>
  );
};

export default If_1;
