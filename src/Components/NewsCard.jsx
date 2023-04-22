import { useState } from "react";
import "../Css/newsCard.css";
// import { useDispatch } from "react-redux";

const NewsCard = ({ title, description, source, publishedAt, imgUrl }) => {
  // const dispatch = useDispatch();
  return (
    <div className="newsCard">
        <div>
        <img className="newsimg" src={imgUrl} />
      </div>
      <p>{publishedAt}</p>
      <div>
        <p className="newsCardTitle">{title}</p>
        
      </div>
      {/* <p>{description}</p>
      <p>{source}</p> */}
  
      <div className="btns">
      <button className="saveSharebtn">Save</button>
    <button className="saveSharebtn">Share</button>
    <button className="saveSharebtn">Read More</button>
      </div>
    
    </div>
  );
};

export default NewsCard;
