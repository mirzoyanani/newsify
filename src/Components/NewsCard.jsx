import { useState } from "react";
import "../Css/newsCard.css";
// eslint-disable-next-line react/prop-types
const NewsCard = ({title,description,source,publishedAt,imgUrl}) => {
  const [isRed,setIsRed]= useState(false);
  function handleColor(){
    setIsRed(!isRed);
  }
  return (
    <div className="newsCard">
       <div>
        <i  onClick={handleColor} className="fa fa-heart-o" style={{fontSize:"36px",color:!isRed ? "black" : "red",transition:"0.5s"}}></i>
       <p>{title}</p>
       </div>
        <div><img className="newsimg"  src={imgUrl} /></div>
        <p>{description}</p>
        <p>{source}</p>
        <p>{publishedAt}</p>
        
    </div>
  );
};

export default NewsCard;