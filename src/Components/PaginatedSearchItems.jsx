import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import ReadMoreModal from "./ReadMoreModal";
import NewsCard from "../Components/NewsCard";
import ShareModal from "./ShareModal";
import api_key from "../Data/api_key";
import { setSearched } from "../Redux/Slices/serachedNewsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";

function Items({ currentItems }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [openshareModal, setOpenShareModal] = useState(false);
  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };
  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  function handleCloseShareModal() {
    setOpenShareModal(false);
  }
  function handleOPenShareModal() {
    setOpenShareModal(true);
  }
  return (
    <>
      <div className="newsCards">
        {currentItems &&
          currentItems.map((item, i) => (
            <NewsCard
              key={"titile" + i}
              article={item}
              onReadMore={handleReadMore}
              onShare={handleOPenShareModal}
            />
          ))}
        {selectedArticle && (
          <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
        )}
        {openshareModal && <ShareModal onClose={handleCloseShareModal} />}
      </div>
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [loading, setLoading] = useState(false);
  const searchtitle = useSelector((state) => state.searchednews.searchTitle);
  const dispatch = useDispatch();
  // fetch(
  //   `https://newsapi.org/v2/everything?q=${searchtitle}&apiKey=${api_key}`
  // ) .then((rsp) => rsp.json())
  // .then((rsp) => {
  //   dispatch(setSearched(rsp.articles));
  // });
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${searchtitle}&apiKey=${api_key}`
    )
      .then((rsp) => rsp.json())
      .then((rsp) => {
        dispatch(setSearched(rsp.articles));
        setLoading(false);
      });
  }, [dispatch, searchtitle]);

  const items = useSelector((state) => state.searchednews.searchNews);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };
  return (
    <>
      {loading ? (
        <div>
          <img
            className="loadingimg"
            src="https://www.downgraf.com/wp-content/uploads/2019/05/Loader-animation-principle-freebie.gif?x36019"
            alt=""
          />
        </div>
      ) : (
        <div>
          {
            (items.length) ?(
            <Items currentItems={currentItems} />):
              <div>
                         <img className="loadingimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROpCcjxp8hU2xCYxKwoKW1eyDkJS20-moxA&usqp=CAU" alt="" />
              </div>
          }
          <div className="nextprevbtns">
            <ReactPaginate
              activeClassName={"itemactive "}
              breakClassName={"itembreak-me "}
              containerClassName={"pagination"}
              disabledClassName={"disabled-page"}
              nextClassName={"itemnext "}
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousClassName={"itemprevious"}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PaginatedItems;
