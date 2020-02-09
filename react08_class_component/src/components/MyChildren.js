import React from "react";

import MychildrenSub from "./MyChildrenSub";
import MyChildrenSub from "./MyChildrenSub";

class MyChildren extends React.Component {
  render() {
    return (
      <div>
        <h2>MyChildren</h2>

        <MyChildrenSub width={400} height={100}>
          Hello World
        </MyChildrenSub>

        <MyChildrenSub width={300} height={80}>
          Hello React
        </MyChildrenSub>

        <MyChildrenSub width={200} height={50} />
      </div>
    );
  }
}

export default MyChildren;
