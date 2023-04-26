
import {format} from "date-fns";
import "../Css/newsCard.css";
import { useDispatch } from "react-redux";
import { setSaved } from "../Redux/Slices/savedNewsSlice";
const NewsCard = ({article, onReadMore,onShare}) => {
  const date = new Date(article.publishedAt);
  const formattedDate = format(date, "MMMM dd, yyyy");
const dispach = useDispatch();
function setSavednews(){
    dispach(setSaved({article}));
}
  return (
    <div className="newsCard">
        <div>
        <img className="newsimg" src={article.urlToImage} />
      </div>
      <p>{formattedDate}</p>
      <div>
        <p className="newsCardTitle">{article.title}</p>
      </div>
      <div className="btns">
      <button onClick={setSavednews} className="saveSharebtn">Save</button>
    <button  onClick={onShare} className="saveSharebtn">Share</button>
    <button onClick={() => onReadMore(article)} className="saveSharebtn">Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
