import React from "react";

// 기능 사용을 위한 참조
import styled, { css } from "styled-components";

// ul 태그로 구성된 컴포넌트 정의 --> styled.태그이름''; (역따옴표 주의)
const MyGridContainer = styled.ul`
  /*  SCSS 코딩 진행*/
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;

  &:after {
    content: "";
    display: block;
    clear: both;
    float: none;
  }
`;

// li 태그로 구성된 컴포넌트 정의
const MyGridItem = styled.li`
  float: left;

  // 전달받은 변수 값에 접근하기 위해서는 | 하여 넓이를 동적으로 설정
  // --> 전달 받은 변수 값을 props 라는 이름의 파라미터로 모아서 주입받은 콜백함수를 정의
  // --> 해당 변수에 대한 처리 후 리턴을 수행하면 그 값이 이 위치에 적용된다.
  //width: 20%;

  width: ${props => props.width};
`;

// div 태그로 구성된 컴포넌트 정의
const MyBox = styled.div`
  border: 3px solid #000;
  background-color: #eee;
  height: 100px;
  text-align: center;
  font-size: 29px;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  //color: #000;

  /* 색상값이 전달 된 경우 해당 값을 사용, 그렇지 않으면 'black'을 기본값으로 사용 */
  color: ${props => props.color || "black"}

  &:hover {
    transform: scale(1.05, 1.05) rotate(-19deg);
    background-color: ${props => props.color || "#eeeeee"}
    //background-color: #eeeeee;
    color: #fff;
  }

  ${props =>
    props.number % 2 === 1 &&
    css`
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    `}
`;

const StyledComponents = () => {
  const myColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "pink",
    "purple"
  ];

  const myWidth = 100 / myColors.width;

  /* 
    컴포넌트 코드 안에서 SCSS 문법을 적용한 컴포넌트를 직접 정의
    패키지 설치가 필요함 
    yarn add styled-components
   */

  return (
    <div>
      <h2>Styled Component</h2>

      <MyGridContainer>
        <MyGridItem width={"20%"}>
          <MyBox>Item 1</MyBox>
        </MyGridItem>
        <MyGridItem width={"20%"}>
          <MyBox>Item 2</MyBox>
        </MyGridItem>
        <MyGridItem width={"20%"}>
          <MyBox>Item 3</MyBox>
        </MyGridItem>
        <MyGridItem width={"20%"}>
          <MyBox>Item 4</MyBox>
        </MyGridItem>
        <MyGridItem width={"20%"}>
          <MyBox>Item 5</MyBox>
        </MyGridItem>
      </MyGridContainer>

      <h3>배열 원소를 활용한 컴포넌트 사용</h3>
      <MyGridContainer>
        {myColors.map((item, index) => {
          // styledComponents에게 HTML 속성처럼 전달하는 값들은 변수로서 작용한다.
          // 속성이름은 특별히 정해진 것이 없다.
          return (
            <MyGridItem key={index} width={myWidth}>
              <MyBox color={item} number={index}>
                {item}
              </MyBox>
            </MyGridItem>
          );
        })}
      </MyGridContainer>
    </div>
  );
};

export default StyledComponents;
