import React from "react";

const Loop_2 = () => {
  /* 배열 원소 탐색 */

  // 화면에 표시할 데이터
  const myArray = ["hello", "world"];

  // 화면에 표시할 반복 컴포넌트
  const myArrayItem = myArray.map((item, index) => {
    return (
      // 반복적으로 처리되는 컴포넌트 요소는 각 항복을 식별하기 위해
      // 고유한 값을 갖는 Key 속성을 포함해야 함 (React 권고사항)
      <li key={index}>{item}</li>
    );
  });

  /* myArrayItem은 myArray와 동일한 크기의 배열이 되며 그 크기만큼 반복되는 컴포넌트 */

  return (
    <div>
      <h2>Loop 2</h2>
      <ul>{myArrayItem}</ul>
    </div>
  );
};

export default Loop_2;

/*
javascript map()

const data = [10, 20, 30, 40];

const hello = data.map(function(v, i) {
    console.log("v=%d, i=%d",v,i);
    return v*10;
})

hello는 data와 똑같은 길이의 배열
리턴 결과는 [10*10, 20*10, 30*10, 40*10];

console.log(hello);


*/
