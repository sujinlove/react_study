import React from "react";
import { handleActions, createAction } from "redux-actions";
import axios from "axios";

/** 1) 액션
 *  어떤 컴포넌트가 겪는 상황을 구분하기 위한 문자열 변수들
 *  "파일이름/상황이름" 값을 지정하면 다른 모듈과 Action 값이 충돌하는 것을 방지할 수 있다.
 *  Ajax 연동 기능 하나당 3개의 액션 정의 -> 목록을 가져오는 중, 목록 가져오기 성공, 목록 가져오기 실패
 */

const GET_LIST = "News/GET_LIST";
const GET_LIST_SUCCESS = "News/GET_LIST_SUCCESS";
const GET_LIST_FAILURE = "News/GET_LIST_FAILURE";

/** 2) 액션 생성 함수 - 액션 객체를 만들어서 리턴한다.
 *  컴포넌트에 대한 액션 값의 수 만큼 정의한다.
 *  --> createAction() 함수를 통해 함수 정의를 자동화
 */

export const getListAction = createAction(GET_LIST);
export const getListSuccessAction = createAction(GET_LIST_SUCCESS);
export const getListFailureAction = createAction(GET_LIST_FAILURE);

/** 3) 상태값 - 단순한 json 객체
 *  컴포넌트에서 다루고자 하는 데이터들을 포함한다.
 */

const initialState = {
  result: [], // 뉴스목록
  loading: false, // 현재 검색중인지 여부
  error: false // 에러 발생 여부
};

/** 4) 리듀서
 *  각각의 action 값을 메서드로 갖는 객체 형태로 정의한다.
 *  각각의 메서드는 initial/State 와 동일한 구조를 갖는 객체를 리턴해야 한다.
 *  --> 특별한 처리로직을 하지 않고 각 상황에 따라 상태값만 조작하여 리턴한다,'
 */

export default handleActions(
  {
    [GET_LIST]: (state = initialState, action) => {
      console.log(action);
      return {
        ...state,
        loading: true
      };
    },
    [GET_LIST_SUCCESS]: (state = initialState, action) => {
      console.log(action);
      return {
        ...state,
        // payload는 action 함수를 호출할때 전달하는 파라미터 객체
        result: action.payload.result,
        loading: false
      };
    },
    [GET_LIST_FAILURE]: (state = initialState, action) => {
      console.log(action);
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    }
  },
  initialState
);

/** 5) 비동기 작업을 수행할 함수 정의
 *  컨테이너로부터 Category라는 파라미터를 전달 받는다. (파라미터는 개발자가 상황에 따라 정의 함)
 *  이 안에서 action 함수들을 dispatch 한다.
 *  이렇게 정의된 함수들은 컨테이너 props에 포함된다.
 */

export const newsListAsync = category => async dispatch => {
  // 검색을 시작했음을 알림
  dispatch(getListAction());

  try {
    const result = await axios.get("https://newsapi.org/v2/top-headlines", {
      params: {
        country: "kr",
        apiKey: "d74ed56bbd494d7786fac94b207f549d",
        category: category
      }
    });

    //console.debug(result);
    dispatch(getListSuccessAction({ result: result.data.articles }));
  } catch {
    //console.error();
    dispatch(getListFailureAction({ error: "뉴스 목록을 가져올 수 없습니다" }));
  }
};
