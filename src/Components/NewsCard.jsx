
import "../Css/newsCard.css";
// import { useDispatch } from "react-redux";
const NewsCard = ({article, onReadMore}) => {
  
  return (
    <div className="newsCard">
        <div>
        <img className="newsimg" src={article.urlToImage} />
      </div>
      <p>{article.publishedAt}</p>
      <div>
        <p className="newsCardTitle">{article.title}</p>
        
      </div>
      {/* <p>{description}</p>
      <p>{source}</p> */}
  
      <div className="btns">
      <button className="saveSharebtn">Save</button>
    <button className="saveSharebtn">Share</button>
    <button onClick={() => onReadMore(article)} className="saveSharebtn">Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
