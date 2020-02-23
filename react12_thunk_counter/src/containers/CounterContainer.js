/**
 * 컨테이너 컴포넌트 - 디스패치 처리를 구현한다.
 */

import React from "react";
import { connect } from "react-redux";
import ReduxCounter from "../components/ReduxCounter";

// 모듈의 모든 기능 통째로 가져오기
import * as counterModule from "../modules/counter";
import { bindActionCreators } from "redux";

/**
 * 스토어로부터 상태값고ㅑ 모듈에 정의된 state 값과 action 함수들을 전달받는 컴포넌트
 * module = {number: 0, color: "#000", plusAction: ƒ, minusAction: ƒ}
 * @param {} module
 */

/**
 * 중요!!!!
 * 모듈 객체와 비동기 작업을 수행하기 위한 함수들에 대한 action 객체를 파라미터로 받는다
 * const CounterContainer = ({ counterModule, action }) => {
 *
 * @param {} param0
 */

const CounterContainer = ({ counterModule, action }) => {
  const { number, color } = counterModule;
  const { plusAsync, minusAsync } = action;

  // 모듈로부터 전달받은 값을 컴포넌트에게 props로 전달하여 그 결과를 리턴한다.
  return (
    <ReduxCounter
      number={number}
      color={color}
      onPlusClick={plusAsync}
      onMinusClick={minusAsync}
    />
  );
};

export default connect(
  // state 값을 그대로 리턴
  state => state,
  dispatch => ({
    // counterModuel에 정의된 action 함수 들을 "action"이라는 객체에 포함시켜 컴포넌트의 props로 전달함
    action: bindActionCreators(counterModule, dispatch)
  })
)(CounterContainer);
