import React, { Component } from "react";

// 참조변수 없이 참조하기. createRef() - X

class MyRefSub2 extends Component {
  // 상태값
  state = {
    myMessage: "Hello World"
  };

  render() {
    // 상태값을 비구조 문법으로 분리해 낸다.
    let { myMessage } = this.state;

    return (
      <div>
        <h3>MyRefSub2</h3>

        {/* ref 속성을 통해 myInputAreaRef 이라는 참조변수를 연결 */}
        <input
          type="text"
          ref={ref => (this.myInputAreaRef = ref)}
          placeholder="input any message..."
          onChange={e => {
            // 상태값 갱신
            myMessage = e.target.value;
            this.setState({ myMessage });

            // React.createRef()를 통해 생성한 참조변수는
            // current 라는 속성을 통해서 DOM에 접근한다.
            // 참조변수가 있을때는 this.myCopyAreaRef.current 가 input 태그를 가리킨 반면에
            // 없을때는 this.myCopyAreaRef 가 input 태그를 가리킴
            this.myCopyAreaRef.value = myMessage;
          }}
        />

        {/* createRef() 함수로 생성한 참조변수를 연결 */}
        <input
          type="text"
          ref={ref => (this.myCopyAreaRef = ref)}
          placeholder="copy area"
          readOnly
        />

        {/* 상태값 출력 */}
        <p>{myMessage}</p>

        <button
          type="button"
          onClick={e => {
            myMessage = "";
            this.setState({ myMessage });

            // 생성된 참조변수를 통해 input 태그에 접근
            this.myInputAreaRef.value = "";
            this.myCopyAreaRef.value = "";
          }}
        >
          Clear!
        </button>
      </div>
    );
  }
}

export default MyRefSub2;
