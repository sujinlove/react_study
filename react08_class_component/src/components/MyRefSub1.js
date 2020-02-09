import React, { Component } from "react";

class MyRefSub1 extends Component {
  // 상태값
  state = {
    myMessage: "Hello World"
  };

  // createRef() 함수를 통해 참조변수를 생성
  myInputAreaRef = React.createRef();
  myCopyAreaRef = React.createRef();

  render() {
    // 상태값을 비구조 문법으로 분리해 낸다.
    let { myMessage } = this.state;

    return (
      <div>
        <h3>MyRefSub1</h3>

        {/* ref 속성을 통해 myInputAreaRef 이라는 참조변수를 연결 */}
        <input
          type="text"
          ref={this.myInputAreaRef}
          placeholder="input any message..."
          onChange={e => {
            // 상태값 갱신
            myMessage = e.target.value;
            this.setState({ myMessage });

            // React.createRef()를 통해 생성한 참조변수는
            // current 라는 속성을 통해서 DOM에 접근한다.
            this.myCopyAreaRef.current.value = myMessage;
          }}
        />

        {/* createRef() 함수로 생성한 참조변수를 연결 */}
        <input
          type="text"
          ref={this.myCopyAreaRef}
          placeholder="copy area"
          readOnly
        />

        <p>{myMessage}</p>

        <button
          type="button"
          onClick={e => {
            myMessage = "";
            this.setState({ myMessage });

            this.myInputAreaRef.current.value = "";
            this.myCopyAreaRef.current.value = "";
          }}
        >
          Clear!
        </button>
      </div>
    );
  }
}

export default MyRefSub1;
