import React from "react";
import { contents } from "../data/NewsContents";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsList = ({ category }) => {
  console.group("NewsList");
  console.debug(category);
  console.debug(contents);
  console.groupEnd();

  // newsData 라는 상태값을 생성 --> 초기값은 원소의 수가 0개인 배열
  // setNewsData -> 값을 변경하기위해 사용하는 함수 (setter)
  const [newsData, setNewsData] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    //setNewsData(contents.articles);

    // async -> 이 함수 안에서 동작하는 비동기 처리가 종료될 때까지 실행흐름을 대기시킴
    // async function getNewList() {
    const getNewList = async () => {
      // Ajax 통신 시작을 알림
      setLoading(true);

      // Ajax 연동 -> async가 명시된 함수 안에서 비동기 처리 앞에 "await"를 선언
      const result = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "kr",
          apiKey: "d74ed56bbd494d7786fac94b207f549d",
          category: category
        }
      });

      console.log(result.data);
      setNewsData(result.data.articles);

      setLoading(false);
    };

    getNewList();
  }, [category]);

  if (loading) {
    return <h2>Now Loading...</h2>;
  }

  return (
    <div>
      {/* 기사 데이터 수 만큼 목록의 아이템을 표시함 */}
      {newsData.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
