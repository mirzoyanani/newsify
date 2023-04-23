// import React from 'react'
import "../Css/readMore.css";
const ReadMoreModal = ({ onClose, article }) => {
  return (
    <div className="readMoreModal">
      <p>{article.title}</p>
      <br />
      <div className="imgcontent">
        <img className="newsimgmodal" src={article.urlToImage} alt="" />
        <p className="artcontent">{article.content}</p>
      </div>
      <div>
        <p>{article.description}</p>
      </div>
      <p>{article.publishedAt}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};
export default ReadMoreModal;
