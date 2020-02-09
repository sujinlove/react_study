import React, { Component } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
//import { contents } from "../data/NewContents";

class NewsList extends React.Component {
  /* 상태값 */
  state = {
    newsData: [], // 뉴스목록을 저장할 배열
    loading: false // ajax 연동 전, 후를 판단하기 위한 boolean값
  };

  // 컴포넌트가 화면에 표시될 때 실행되는 라이프 사이클 메서드 ( 데이터 불러오기 )
  componentDidMount() {
    console.log("componentDidMount");

    // 외부 파일로 정의해 둔 샘플 데이터를 상태값에 연결 (임시용)
    //this.setState({ newsData: contents.articles });

    // async -> 이 함수 안에서 동작하는 비동기 처리가 종료될 때까지 실행흐름을 대기시킴
    // async function getNewList() {
    const getNewList = async () => {
      // Ajax 통신 시작을 알림
      this.setState({ loading: true });

      // Ajax 연동 -> await가 명시된 함수 안에서 비동기 처리 앞에 "await"를 선언
      const result = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "kr",
          apiKey: "d74ed56bbd494d7786fac94b207f549d",
          category: this.props.category
        }
      });

      // 받아온 결과 값을 상태값에 업데이트
      console.log(result.data);
      this.setState({ newsData: result.data.articles, loading: false });
    };

    getNewList();
  }

  render() {
    // 상태값의 원소들을 복사한다.
    const { newsData, loading } = this.state;

    if (loading) {
      return <h2>Now Loading....</h2>;
    }

    return (
      <div>
        {/* 기사 데이터 수 만큼 목록의 아이템을 표시함 */}
        {newsData.map((item, index) => (
          //<p key={index}>{JSON.stringify(item)}</p>
          <NewsItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default NewsList;
