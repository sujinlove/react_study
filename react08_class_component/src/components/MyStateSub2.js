import React from "react";

/* MyStateSub1 생성자 없는 예제 */

class MyStateSub2 extends React.Component {
  /* 생성자가 없는 경우는 state 값 직접 정의 */
  state = {
    my_number: 0,
    my_time: new Date().toString()
  };

  /* 이벤트 핸들러 함수 */
  // 생성자가 없는 경우 반드시 화살표 함수 형태로 정의해야한다.
  onButtonClick = e => {
    // 준비한 state 값에 대한 변경 처리
    this.state.my_number++;
    this.state.my_time = new Date().toString();

    // 준비한 json을 전달한다. --> json 안에 있는 값이 화면에 반영된다.
    this.setState(this.state);
  };

  render() {
    return (
      <div>
        <h2>MyStateSub2</h2>

        <p>
          {this.state.my_number}회 눌러짐 :
          <i>
            <small>{this.state.my_time}</small>
          </i>
        </p>

        <button onClick={this.onButtonClick}>+1</button>
      </div>
    );
  }
}

export default MyStateSub2;
