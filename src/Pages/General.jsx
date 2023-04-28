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

// fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f3ac1bdb829e4602ad4fcc2cf02604ee").then((rsp)=> rsp.json()).then((rsp)=>console.log(rsp.articles));
const General = () => {
  const { category} = useContext(CategoryContext);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("us");
  const [page, setPage] = useState(1);
  const [openshareModal, setOpenShareModal] = useState(false);

  const pageSize = 16;
  const articlesCount = useSelector((state) => state.news.articlescount);
  const page_Size = Math.round( articlesCount / pageSize);

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

  // fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f3ac1bdb829e4602ad4fcc2cf02604ee").then((rsp)=> rsp.json()).then((rsp)=>   dispatch(setNews(rsp.articles)));

  //  useEffect(()=>{
  //   fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f3ac1bdb829e4602ad4fcc2cf02604ee").then((rsp)=> rsp.json()).then((rsp)=>console.log(rsp.articles));
  //   console.log(55555555);
  //  },[]);
  
  useEffect(() => {
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
            <label htmlFor="countries"> Ckeck country : </label>
            <select
              name="countries"
              defaultValue={country}
              id="countries"
              onChange={(e) => {
                setCountry(e.target.value);
                setPage(1);
              }}
              className="countrySelec"
            >
              {countries.map((item, i) => {
                return (
                  <option className="option" key={i+"countryOption"} value={item}>
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
              <button className="btnsnextprev" onClick={prevPage}>Prev Page</button>
              <span className="pageitem s">
                <p>
                  {page}/{page_Size}
                </p>
              </span>
              <button  className="btnsnextprev" onClick={nextPage}>Next Page</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default General;
