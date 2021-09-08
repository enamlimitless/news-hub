import React from "react";
import { MdDateRange } from "react-icons/md";
import img from "../../images/crypto.jpg";
const TopNewsData = (props) => {
  const { category, title, date } = props.topNews || {};
  return (
    <div>
      <div className="top-news-img">
        <img className="top-img img-fluid" src={img} alt="" />
        <div className="img-info">
          <span className="category"><a href="/">{category}</a></span>
          <p className="date mt-3"><MdDateRange />{date}</p>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopNewsData;
