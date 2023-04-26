import api_key from "../Data/api_key";
import "../Css/general.css";
import { useEffect, useState } from "react";
import { setNews, setArticlesCount } from "../Redux/Slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../Components/NewsCard";
import countries from "../Data/countries";
import ReadMoreModal from "../Components/ReadMoreModal";
import getData from "../Data/getData";
import { useContext } from "react";
import CategoryContext from "../Context/CategoryContext";
import ShareModal from "../Components/ShareModal";
const General = () => {
  const { category} = useContext(CategoryContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("us");
  const [page, setPage] = useState(1);
  const [openshareModal, setOpenShareModal] = useState(false);

  const pageSize = 16;
  const articlesCount = useSelector((state) => state.news.articlescount);
  const page_Size =Math.round( articlesCount / pageSize);

  function handleCloseShareModal() {
    setOpenShareModal(false);
  }
  function handleOPenShareModal() {
    setOpenShareModal(true);
  }

  function nextPage() {
    if (page < page_Size) {
      setPage(page + 1);
    }
  }
  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    setLoading(true);
    getData(country, api_key, category, pageSize, page)
      .then((rsp) => rsp.json())
      .then((rsp) => {
        dispatch(setNews(rsp.articles));
        dispatch(setArticlesCount(rsp.totalResults));
        setLoading(false);
      });
  }, [dispatch, country, category, page]);

  const news = useSelector((state) => state.news.news);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };
  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  ///////////////
  return (
    <>
      <div className="news">
        {loading && (
          <div className="loading">
            <img
              className="loadingimg"
              src="https://www.downgraf.com/wp-content/uploads/2019/05/Loader-animation-principle-freebie.gif?x36019"
              alt=""
            />
          </div>
        )}
        {!loading && (
          <div>
            <label htmlFor="countries">Ckeck country :</label>
            <select
              name="countries"
              defaultValue={country}
              id="countries"
              onChange={(e) => {
                setCountry(e.target.value);
                setPage(1);
              }}
            >
              {countries.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className="newsCards">
              {selectedArticle && (
                <ReadMoreModal
                  article={selectedArticle}
                  onClose={handleCloseModal}
                />
              )}
              {openshareModal && <ShareModal onClose={handleCloseShareModal} />}
              {news.map((item, i) => {
                return (
                  <NewsCard
                    key={"mykey" + i}
                    article={item}
                    onReadMore={handleReadMore}
                    onShare={handleOPenShareModal}
                  />
                );
              })}
            </div>
            <div className="nextprevbtns">
              <button onClick={prevPage}>Prev Page</button>
              <span className="pageitems">
                <p>
                  {page}/{page_Size}
                </p>
              </span>
              <button onClick={nextPage}>Next Page</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default General;
