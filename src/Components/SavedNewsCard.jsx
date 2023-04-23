// import React from 'react'

const SavedNewsCard = ({ article }) => {
  return (
    <div className="newsCard">
      <img className="newsimg" src={article.article.urlToImage} />
      <p>{article.article.publishedAt}</p>
      <p className="newsCardTitle">{article.article.title}</p>
      <div className="btns">
      {/* <button  className="saveSharebtn">Save</button>
    <button className="saveSharebtn">Share</button>
    <button className="saveSharebtn">Read More</button> */}
      </div>
    </div>
  );
};

export default SavedNewsCard;
