import React from "react";
import MyPropTypesSub from "./MyPropsTypesSub";

const MyPropTypes = () => {
  return (
    <div>
      <h2>여기는 MyPropTypes </h2>

      {/* 컴포넌트에게 props 전달하기 */}
      <MyPropTypesSub name="민호" age="19" hobby="사진찍기" />
      <MyPropTypesSub name="수영" age="스물한살" hobby="사진찍기" />
      <MyPropTypesSub name="철민" age="22" />
    </div>
  );
};

export default MyPropTypes;
