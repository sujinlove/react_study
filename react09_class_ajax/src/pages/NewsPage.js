import React, { Component } from "react";
import Category from "../components/Category";
import NewsList from "../components/NewsList";

class NewsPage extends React.Component {
  render() {
    //const { params } = match;
    const { params } = this.props.match;

    return (
      <div>
        <Category />
        <hr />
        <NewsList category={params.category} />
      </div>
    );
  }
}

export default NewsPage;
