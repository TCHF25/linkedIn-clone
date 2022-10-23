import React from "react";
import { Link } from "react-router-dom";
const NewsListItem = () => {
  return (
    <li className="newsListItem">
      <h1 className="newsHeader">
        <Link to="">Ireland heading for defeat by Lebanon</Link>
      </h1>
      <p className="newsInfo">Click for more info</p>
    </li>
  );
};

export default NewsListItem;