// import React from "react";
import api_key from "../api_key";
import "../Css/general.css";
import { useEffect, useState } from "react";
import { setNews, setArticlesCount } from "../Redux/Slices/newsSlice";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../Components/NewsCard";
import countries from "../countries";
import categories from "../categories";
import ReadMoreModal from "../Components/ReadMoreModal";
// import { setSaved } from "../Redux/Slices/savedNewsSlice";



const General = () => {
 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("us");
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);

  const pageSize = 16;
  const articlesCount = useSelector((state) => state.news.articlescount);
 const page_Size = articlesCount / pageSize;
 
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
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}&category=${category}&pageSize=${pageSize}&page=${page}`
    )
      .then((rsp) =>  rsp.json())
      .then((rsp) => {
        dispatch(setNews(rsp.articles));
        dispatch(setArticlesCount(rsp.totalResults));
        setLoading(false);
      });
  }, [dispatch, country, category, page]);

  const news = useSelector((state) => state.news.news);

  // function handleSave(title,publishedAt,imgUrl){
  //      dispatch(setSaved({title,publishedAt,imgUrl}));
  // }
  // console.log(5555);

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
            <label htmlFor="category">Ckeck category :</label>
            <select
              name="category"
              defaultValue={category}
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
            >
              {categories.map((item, i) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className="newsCards">
            {selectedArticle && (
        <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
      )} 
              {news.map((item, i) => {
                return (
                  <NewsCard
                    key={"mykey"+i}
                    article={item}
                    onReadMore={handleReadMore}
                  />
                );
              })}
            </div>
            <div className="nextprevbtns">
              <button onClick={prevPage}>Prev Page</button>
              <span className="pageitems">
                 <p>{page}/{Math.floor(page_Size)+1}</p>
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
