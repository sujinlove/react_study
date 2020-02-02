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

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  &:after {
    content: "";
    display: block;
    clear: both;
    float: none;
  }
`;
const CategoryListItem = styled.li`
  float: left;
  &:after {
    content: "|";
    padding: 0px 15px;
    &:last-childe:after {
      content: "";
    }
  }
`;
const CategoryItemLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;
  &:hover {
    color: #495957;
  }
  &.active {
    font-weight: bold;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }
`;

const Category = () => {
  return (
    <CategoryList>
      {categories.map((currentValue, index) => (
        <CategoryListItem key={index}>
          <CategoryItemLink
            // 현재 페이지와 링크가 일치하는 경우 적용될 클래스 이름
            activeClassName="active"
            // true 로 적용될 경우 기본 페이지
            // --> 반복문에서 처리중인 배열 원소의 name 값이 all 이면 true 출력
            exact={currentValue.name === "all"}
            // 클릭시 이동할 링크
            to={currentValue.name === "all" ? "/" : "/" + currentValue.name}
          >
            {currentValue.text}
          </CategoryItemLink>
        </CategoryListItem>
      ))}
    </CategoryList>
  );
};

export default Category;
