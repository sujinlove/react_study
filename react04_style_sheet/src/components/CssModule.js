import React from "react";

import myStyle from "../assets/css/myStyle.module.css";

const CssModule = () => {
  /* CSS 로 사용될 JSON 객체 정의 */

  return (
    <div>
      <h2>Css Module</h2>

      <h3>변수에 저장된 CSS 클래스</h3>
      <div className={myStyle.myCssBox} />

      <h3>독립클래스</h3>
      <div className="myBorderBox" />

      <h3>다중 클래스 적용 (1) - 역따옴표 사용</h3>
      <div className={`${myStyle.size} ${myStyle.bg}`} />

      <h3>다중 클래스 적용 (2) - 배열로 구성한 후 Join 함수로 결합</h3>
      <div className={[myStyle.size, myStyle.bg].join(" ")} />
    </div>
  );
};

export default CssModule;

/*
css 클래스 이름에 '-' 절대 넣지 말 것. '_' 까지는 괜찮음!

.myCssBox {
    background-image: url(../img/img1.png);
    width: 300px;
    height: 300px;
    background-size: cover;
    border: 5px solid #eee;
  }
*/
