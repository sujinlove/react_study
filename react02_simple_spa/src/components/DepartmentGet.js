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

  /* Query String을 JSON 객체 형태로 변환  */
  const query = qs.parse(queryString, {
    ignoreQueryPrefix: true // 맨 앞의 "?" 제거 옵션
  });
  console.log(query);

  console.log("요청된 학과 번호 값=%s (%s)", query.deptno, typeof query.deptno);
  console.log("요청된 메세지 내용 값=%s (%s)", query.msg, typeof query.msg);

  /* 한 페이지에서 GET 파라미터에 따라 다르게 표현할 데이터 준비 */
  // --> 실전에는 이 값에 해당하는 JSON을 백엔드로부터 받아와야한다. ==> Ajax

  const departmentList = {
    item: [
      { deptno: 101, dname: "컴퓨터공학과", loc: "1호관" },
      { deptno: 102, dname: "멀티미디어학과", loc: "2호관" }
    ]
  };

  /* 전달된 파라미터에 따라 화면에 출력할 내용 조회하기 */
  // 미리 준비된 JSON 객체에서 요청정보(query.deptno) 와 동일한 deptno 값을 갖는 객체를 조회
  const deptno = parseInt(query.deptno);

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

export default DepartmentGet;
