import {format} from "date-fns";
import { removeSaved } from "../Redux/Slices/savedNewsSlice";
import { useDispatch } from "react-redux";
const SavedNewsCard = ({article,onReadMore,onShare }) => {
  const dispatch = useDispatch();
  const date = new Date(article.article.publishedAt);
const formattedDate = format(date, "MMMM dd, yyyy");
  return (
    <div className="newsCard">
      <img className="newsimg" src={article.article.urlToImage} />
      <p>{formattedDate}</p>
      <p className="newsCardTitle">{article.article.title}</p>
      <div className="btns">
      <button onClick={()=>dispatch(removeSaved({article}))} className="saveSharebtn">Remove</button>
      <button  onClick={onShare} className="saveSharebtn">Share</button>
      <button onClick={() => onReadMore(article.article)}  className="saveSharebtn">Read More</button>
      </div>
    </div>
  );
};

export default SavedNewsCard;
