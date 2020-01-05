/*
    DepartmentPath.js
    - Path 파라미터를 전달받는 페이지

    @param {*} props 컴포넌트에게 전달되는 부가정보
*/
import React from "react";

const DepartmentPath = props => {
  /* 요청 데이터 확인하기 */
  console.group("DepartmnetPath");

  // path 파라미터는 propsdml match.params 객체로 내장되어있다.
  const urlParams = props.match.params;
  console.log(urlParams);
  console.groupEnd();

  return <div></div>;
};

export default DepartmentPath;
