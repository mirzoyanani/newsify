// import React from 'react'

const SavedNewsCard = ({article}) => {
  return (
    <div className="newsCard">
     
        <img className="newsimg" src={article.article
.urlToImage} />
      
      <p>{article.article
.publishedAt}</p>
   
        <p className="newsCardTitle">{article.article
.title}</p>
 
    </div>
  );
};

export default SavedNewsCard;