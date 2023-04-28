// import React from 'react'
import {format} from "date-fns";
import "../Css/readMore.css";
const ReadMoreModal = ({ onClose, article }) => {
const date = new Date(article.publishedAt);
const formattedDate = format(date, "MMMM dd, yyyy");
//  console.log(article);
  return (
    <div className="readMoreModal">
    
      <div className="closeBtn"> <button onClick={onClose}><i className="fa fa-close" style={{fontSize:"24px",border:"none"}}></i></button></div>
      <p className="readMoreTitle">{article.title}</p>
      <br />
      <div className="imgcontent">
        <img className="newsimgmodal" src={article.urlToImage} alt="" />
        <p className="artcontent">{article.content}</p>
      </div>
      <div>
        <p>{article.description}</p>
      </div>
      <div className="dateDiv">

      <p>{formattedDate }</p>
      </div>
     
    </div>
  );
};
export default ReadMoreModal;
