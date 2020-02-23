import React from "react";
import Category from "../components/Category";
import NewsConatiner from "../containers/NewsContainer";

/**
 * 뉴스페이지
 * -> Router 에 의해서 호출되는 대상이므로 Get, path 파라미터는 이 페이지에서 수신 가능
 */

const NewsPage = ({ match }) => {
  const { params } = match;

  return (
    <div>
      <Category />
      <hr />
      <NewsConatiner category={params.category} />
    </div>
  );
};

export default NewsPage;
