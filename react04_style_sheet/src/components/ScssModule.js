import React from "react";

import myScssMod from "../assets/scss/style.module.scss";

const ScssModule = () => {
  /* CSS 로 사용될 JSON 객체 정의 */

  return (
    <div>
      <h2>Scss Module</h2>

      <div className={myScssMod.myScssMod}>
        <div className={[myScssMod.myScssBox, myScssMod.red].join(" ")} />
        <div className={[myScssMod.myScssBox, myScssMod.green].join(" ")} />
        <div className={[myScssMod.myScssBox, myScssMod.blue].join(" ")} />
        <div className={[myScssMod.myScssBox, myScssMod.orange].join(" ")} />
        <div className={[myScssMod.myScssBox, myScssMod.yellow].join(" ")} />
        <div className={[myScssMod.myScssBox, myScssMod.pink].join(" ")} />
      </div>
    </div>
  );
};

export default ScssModule;
