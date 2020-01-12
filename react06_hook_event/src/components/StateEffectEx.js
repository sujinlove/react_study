import React from "react";

// ajax를 사용하기 위해 jquery를 사용했지만, ajax만 쓰자고 jquery를 불러오는것은 옳지 않고 추후 axious를 사용하는 것이 더 효율적임.
import $ from "jquery";

const StateEffectEx = () => {
  /* 화면에 표시할 상태 값 -> 초기값을 빈 배열로 정의 */
  // 2) setDepartment 함수에 의해 State에 값을 넘겨주고
  const [department, setDepartment] = React.useState([]);

  /* 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨 */
  // 1) 제일먼저 실행이 되면서, ajax로 받아온 json을 setDepartment함수를 통해 보내고
  React.useEffect(() => {
    $.get("http://itpaper.co.kr/demo/react/api/dept_list.php", json => {
      console.log(json);
      setDepartment(json.item);
    });
  }, []);

  return (
    <div>
      <h2>StateEffectEx</h2>

      {/* 3) 위에서 department에 넣은 값을 가지고 뿌려준다. */}
      {department.map((item, index) => {
        return (
          <div key={item.deptno}>
            <h3>{item.dname}</h3>
            <p>
              학과번호: {item.deptno} / 학과위치: {item.loc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StateEffectEx;

/** */
