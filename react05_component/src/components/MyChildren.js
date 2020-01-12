import React from "react";

import MychildrenSub from "./MyChildrenSub";

const MyChildren = () => {
  return (
    <div>
      {/* props 전달시 문자열 이외의 데이터타입은 중괄호를 붂어야함. */}
      <MychildrenSub width={400} height={100}>
        {" "}
        Hello world{" "}
      </MychildrenSub>
      <MychildrenSub width={300} height={80}>
        {" "}
        안녕 React{" "}
      </MychildrenSub>
      <MychildrenSub width={200} height={50} />
    </div>
  );
};

export default MyChildren;
