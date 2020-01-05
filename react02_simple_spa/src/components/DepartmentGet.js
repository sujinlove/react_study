/*
    DepartmentGet.js
    - HTTP GET 파라미터를 전달받도록 구성된 페이지
*/
import React from "react";

// QueryString 값을 식별할 수 있는 패키지 참조
// --> 참조 에러시 "yarn add qs"
// --> 혹은 "npm install qs --save"
import qs from "qs";

/*
    DepartmentGet

    컴포넌트에게 전달되는 부가정보들은 props라는 이름의 파라미터에 모아서 전달된다.
    (JSON)

    @param {*} props
*/

const DepartmentGet = props => {
  console.group("DepartmentGet");

  //props 값 전체 확인
  console.log(props);

  /* 컴포넌트로 전달되는 props에는 기본적으로 location 객체가 포함되어 있다. */
  // --> QueryString 값을 받아온다.
  const queryString = props.location.search;
  console.log(queryString);

  console.log("test");
  /* Query String을 JSON 객체 형태로 변환  */
  const query = qs.parse(queryString, {
    ignoreQueryPrefix: true // 맨 앞의 "?" 제거 옵션
  });
  console.log(query);

  console.log("요청된 학과 번호 값=%s (%s)", query.deptno, typeof query.deptno);
  console.log("요청된 메세지 내용 값=%s (%s)", query.msg, typeof query.msg);

  console.groupEnd();

  return <div></div>;
};

export default DepartmentGet;
