// import React from "react";
import { useSelector } from "react-redux";
import SavedNewsCard from "../Components/SavedNewsCard";
import ReadMoreModal from "../Components/ReadMoreModal";
import { useState } from "react";
const SavedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const saved = useSelector((state) => state.savednews.saved);
  // const newsCards = useSelector(state => state.news.cards);
  const totalItems = useSelector((state) => state.savednews.saved.length);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNewsCards = saved.slice(startIndex, endIndex);
  // console.log(displayedNewsCards);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // console.log(saved);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
    <div className="newsCards">
      {selectedArticle && (
        <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
      )}

      {displayedNewsCards.map((item, i) => {
        return (
          <SavedNewsCard
            onReadMore={handleReadMore}
            key={"titile" + i}
            article={item}
          />
        );
      })}
      
    </div>
    <div className="nextprevbtns">
    <button onClick={handlePrevPage} disabled={currentPage === 1}>
      Previous Page
    </button>
    {currentPage}
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
      Next Page
    </button>
  </div>
  </div>
  );
};

export default SavedPage;
