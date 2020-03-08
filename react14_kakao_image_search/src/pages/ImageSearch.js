import React from "react";
import ImageForm from "../components/ImageForm";
import ImageList from "../components/ImageList";

const ImageSearch = ({ match }) => {
  // 전체 path 파라미터 가져오기
  const { params } = match;

  return (
    <div>
      <h1>Kakao Image Search</h1>

      <ImageForm />
      <hr />
      {/* query 라는 이름의 path 파라미터를 전달함 */}
      <ImageList query={params.query} />
    </div>
  );
};

export default ImageSearch;
