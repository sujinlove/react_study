import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

/**
 * 뉴스카테고리 종룰르 정의
 * name: OpenAPI 에 전달할 변수값
 * text: 페이지에 표시할 메뉴명
 */

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainement", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" }
];

const Category = () => {
  return <div></div>;
};

export default Category;
