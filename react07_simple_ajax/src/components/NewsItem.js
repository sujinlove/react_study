import React from "react";
import styled from "styled-components";

const NewsItemLink = styled.a`
  display: block;
  width: auto;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  padding-left: 120px;
  min-height: 100px;
  &:hover {
    background-color: #eee;
  }

  img {
    width: 100px;
    height: 100px;
    background-position: center center;
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: #fff;
  }

  .subject {
    font-size: 20px;
    font-weight: normal;
    padding: 0;
    margin: 0 0 10px 0;
  }

  .description {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }
`;

const NewsItem = ({ item }) => {
  return (
    <NewsItemLink href={item.url} target="_blank">
      <div
        className="img"
        style={{ backgroundImage: "url(" + item.urlToImage + ")" }}
      />
      <h2 className="subject">{item.title}</h2>
      <p className="description">{item.description}</p>
    </NewsItemLink>
  );
};

export default NewsItem;
