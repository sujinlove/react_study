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

  console.log(
    "요청된 학과 번호 값=%s (%s)",
    urlParams.deptno,
    typeof urlParams.deptno
  );
  console.log(
    "요청된 메세지 내용 값=%s (%s)",
    urlParams.msg,
    typeof urlParams.msg
  );

  const departmentList = {
    item: [
      { deptno: 201, dname: "전자공학과", loc: "3호관" },
      { deptno: 202, dname: "기계공학과", loc: "4호관" }
    ]
  };

  /* 전달된 파라미터에 따라 화면에 출력할 내용 조회하기 */
  // 미리 준비된 JSON 객체에서 요청정보(urlParams.deptno) 와 동일한 deptno 값을 갖는 객체를 조회
  const deptno = parseInt(urlParams.deptno);

  // 조회결과가 저장될 객체
  let departmentItem = null;

  // 미리 준비한 JSON에서 deptno 값이 일치하는 정보를 조회
  departmentList.item.some((item, index) => {
    if (item.deptno === deptno) {
      departmentItem = item;
      return;
    }
  });

  console.groupEnd();
  if (!departmentItem) {
    return <h2>존재하지 않는 데이터에 대한 요청입니다.</h2>;
  }

  return (
    <div>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호: {departmentItem.deptno}</li>
        <li>학과위치: {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentPath;
