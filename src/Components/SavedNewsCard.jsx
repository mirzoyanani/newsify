
import { removeSaved } from "../Redux/Slices/savedNewsSlice";
import { useDispatch } from "react-redux";
const SavedNewsCard = ({article,onReadMore}) => {
  const dispatch = useDispatch();
  return (
    <div className="newsCard">
      <img className="newsimg" src={article.article.urlToImage} />
      <p>{article.article.publishedAt}</p>
      <p className="newsCardTitle">{article.article.title}</p>
      <div className="btns">
      <button onClick={()=>dispatch(removeSaved({article}))} className="saveSharebtn">Remove</button>
      <button className="saveSharebtn">Share</button>
      <button onClick={() => onReadMore(article.article)}  className="saveSharebtn">Read More</button>
      </div>
    </div>
  );
};

export default SavedNewsCard;
