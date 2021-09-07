import React from "react";
import img from "../../images/crypto.jpg";
const TopNewsData = (props) => {
  // console.log(props.category);
  const { category, title, date } = props.topNews || {};
  return (
    <div>
      <div className="top-news-img">
        <img className="top-img img-fluid" src={img} alt="" />
        <div className="img-info">
          <span className="category">{category}</span>
          <p className="date">{date}</p>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default TopNewsData;
