import React from "react";

// /src 폴더 하위에 임의의 경로에 존재하는 이미지 파일을 참조
// --> 현재 소스파일을 기준으로 하는 상대경로로 지정
// --> 실행시에는 react에 의해 다른 경로로 복사된다.
import reactImg1 from "../assets/img/img1.png";
import reactImg2 from "../assets/img/img2.png";

/*
    inline css 를 적용한 컴포넌트
    ex) <div style="..."></div>
*/

const InlineCss = () => {
  /* CSS 로 사용될 JSON 객체 정의 */
  // CSS 속성이름은 javascript의 프로퍼티 이름으로 지정해야 함.
  // ex_ document.getElementById('hello').style.backgroundColor = "#ff00ff";

  const myStyle = {
    backgroundColor: "#f60",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#ffffff",
    padding: "10px 20px"
  };

  return (
    <div>
      <h2>Inline CSS</h2>

      <h3>변수로 정의된 css 참조하기</h3>
      <div style={myStyle}>Hello React Css (1)</div>

      <h3>직접 CSS 코딩하기</h3>
      <div
        style={{
          backgroundColor: "#000000",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#ffffff",
          padding: "10px 20px"
        }}
      >
        Hello React Css (2)
      </div>

      <h3>이미지 참조하기</h3>
      <div>
        {/* 이미지 사용시 alt 속송을 지정 안하면 warning */}
        <img src={reactImg1} alt="sample img" />

        {/* public 폴더 안의 파일들은 단순 절대경로로 참조 가능함. */}
        <img src="logo192.png" alt="public img" />

        <div
          style={{
            display: "table",
            width: "240px",
            height: "240px",
            backgroundImage: "url(" + reactImg2 + ")",
            backgroundSize: "cover",
            textAlign: "center"
          }}
        >
          <div
            style={{
              display: "table-cell",
              verticalAlign: "middle"
            }}
          >
            배경 이미지
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineCss;
