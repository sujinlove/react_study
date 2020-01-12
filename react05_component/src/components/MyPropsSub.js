import React from "react";

const MyPropsSub = props => {
  return (
    <div>
      <h2>여기는 MyPropsSub</h2>
      <p>
        제 이름은 <b>{props.name}</b> 이고, 나이는 <b>{props.age}</b> 입니다.
      </p>
    </div>
  );
};

// 속성값이 전달되지 않을 경우를 대비하여 기본값을 JSON으로 정의해 둘 수 있다. (객체이름 고정)
MyPropsSub.defaultProps = {
  name: "unknown",
  age: 0
};

export default MyPropsSub;
