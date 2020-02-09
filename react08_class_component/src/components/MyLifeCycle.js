import React, { Component } from "react";

class MyLifeCycle extends Component {
  /**
   * [Mount] (1) componetn constructor 컴포넌트 생성자
   * 이 컴포넌트가 생성될 때 최초 1회만 실행된다.
   * 이 메서드의 용도는 초기 state 값을 결정하는 것이다.
   * --> 이벤트 핸들러를 bind 해야한다는 불편함 때문에 잘 사용되지 않는다.
   *
   * @param {*} props
   */

  constructor(props) {
    super(props);
    console.log("[Mount] (1) 컴포넌트 생성자");

    /* update 상태를 확인하기 위한 state 값 생성 */
    // (필요하다면) 초기 state값 결정
    this.state = {
      number: 0
    };
  }
  /**
   * [Mount] (2) 최초 마운트 시와 갱신 시 모두에서 render() 메서드를 호출하기 직전에 호출된다.
   * state를 갱신하기 위한 객체를 반환하거나, null을 반환하여 아무 것도 갱신하지 않을 수 있다.
   * 이 메서드는 시간이 흐름에 따라 변하는 props에 state가 의존하는 아주 드문 사용레를 위하여 존재한다.
   * 코드가 장황해지고, 이로 인하여 컴포넌트를 이해하기 어려워지므로 보다 간단한 다른 대안들에 익숙해지는 것을 권장한다.
   *
   *
   * @param {*} props
   * @param {*} state
   */

  static getDerivedStateFromProps(props, state) {
    console.log("[Mount] (2) getDerivedStateFromProps");
  }

  /**
   * [Mount] (3) 렌더링(= 화면출력) 함수
   * 라이프 사이클 메서드 중 유일한 필수 메서드
   * 이 메서드 안에서 this.props 나 this.state 에 접근할 수 있으며,
   * 리액트 요소 (HTML 태그, 다른 컴포넌트)를 반환한다.
   *
   * 이 메서드 안에서는 이벤트 핸들러가 아닌 곳에서 setState()를 사용하면 안되며,
   * 브라우저의 DOM에 직접 접근해서도 안된다,
   *
   * DOM 정보를 가져오거나 state에 변화를 줄 때는 componentDidMount()에서 처리해야한다.
   *
   */

  /**
   * [Mount] (4) render() 함수에 의해 브라우저에게 DOM이 표시괸 후 호출된다.
   * 즉, render() 함수가 실행되고, 화면서 HTML요소가 표시된 직후에 호출된다.
   * jQuery 등 기타 외부 라이브러리로 DOM을 제어하고자 하 ㄹ경우 이 위치에서 구현해야한다,
   * setTimeut, setInterval, Ajax 요청도 같은 작업도 이 한순ㄱ간에 실행되었습
   *
   */

  componentDidMount() {
    console.log("[Mount] (4) componentDidMount가 실행되었습니다.");
  }

  /**
   * [Update] (2) 컴포넌트 상태가 변경되어 화면이 갱신되기 직전에 호출된다,.
   * 즉 update 상태에서 render() 함수가 실행되기 직전에 호출된다
   * 이 함수에서 ture를 리턴하면 render() 가 실행되고, false를 리턴하면 render()를 실행하지 않는다.
   *
   * // update가 발생하는 경우
   * 1) props값이 새롭게 전달된 경우 : getDerivedStateFromProps-> shouldComponentUpdate -> render
   *
   * 2) setState가 호출된 경우 : shouldComponentUpdate -> render
   *
   * 3) forceUpdate() 가 호출되어 화면이 강제로 갱신되는 경우 : render
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Update] (2) shouldComponentUpdate 실행되었습니다.");
    // -> nextState는 this.state 에서 변경될 값을 의미

    console.log(
      ">> 원본 state = %d, nextState = %d",
      this.state.number,
      nextState.number
    );

    let refresh = true;
    if (nextState.number % 3 !== 0) {
      refresh = false;
    }

    return refresh;
  }

  /**
   * [Update] (3) 컴포넌트 변화를 DOM에 반영하기 바로 직전 (render실행 직후)에 실행된다.거의 사용안함
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Unmount] (3) getSnapshotBeforeUpdate 실행되었습니다.");
    return prevState;
  }

  /**
   * [Update] (4) 컴포넌트의 업데이터 작업이 끝난 후 (render 실행 후) 호출된다.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("[Unmount] (4) componentDidUpdate 실행되었습니다.");
  }

  /**
   * [Unmount] 컴포넌트가 화면에서 제거될 때 호출
   */
  componentWillUnmount(prevProps, prevState) {
    console.log("[Unmount] (4) componentWillUnmount 실행되었습니다.");
  }

  render() {
    console.log("[Mount] (3) render");
    return (
      <div>
        <h2>MyLifeCycle</h2>
        <p>3의 배수로 갱신</p>
        <h3>{this.state.number}</h3>
        <button
          type="button"
          onClick={e => this.setState({ number: this.state.number + 1 })}
        >
          plus(1)
        </button>
      </div>
    );
  }
}

export default MyLifeCycle;
