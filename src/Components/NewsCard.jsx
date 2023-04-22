
import "../Css/newsCard.css";
import { useDispatch } from "react-redux";
import { setSaved } from "../Redux/Slices/savedNewsSlice";
const NewsCard = ({article, onReadMore}) => {
  const dispach = useDispatch();
  return (
    <div className="newsCard">
        <div>
        <img className="newsimg" src={article.urlToImage} />
      </div>
      <p>{article.publishedAt}</p>
      <div>
        <p className="newsCardTitle">{article.title}</p>
      </div>
      <div className="btns">
      <button onClick={dispach(setSaved({saved:true,article}))} className="saveSharebtn">Save</button>
    <button className="saveSharebtn">Share</button>
    <button onClick={() => onReadMore(article)} className="saveSharebtn">Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
