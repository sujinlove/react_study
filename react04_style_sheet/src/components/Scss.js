import React from "react";

import "../assets/scss/style.scss";

const Scss = () => {
  /* SCSS 를 사용하는 컴포넌트 */
  // 패키지 설치 필요
  // yarn add node-sass 혹은
  // npm install --save node-sass

  // sass 를 개성해서 기존의 css아 문법이 흡사하게 만들어진 다음버전 --> scss

  return (
    <div>
      <h2>Scss</h2>

      <div className="myScss">
        <div className="myScssBox red" />
        <div className="myScssBox green" />
        <div className="myScssBox blue" />
        <div className="myScssBox orange" />
        <div className="myScssBox yellow" />
        <div className="myScssBox pink" />
      </div>
    </div>
  );
};

export default Scss;
