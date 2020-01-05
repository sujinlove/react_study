import React from "react";

const Loop_3 = () => {
  /* return 문 안에서 map함수 사용하기 */

  const seasons = ["spring", "summer", "fall", "winter"];

  return (
    <div>
      <h2>Loop 3</h2>
      <table border="1">
        <tbody>
          <tr>
            {seasons.map((item, index) => {
              return <td key={IDBIndex}>{item}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loop_3;
