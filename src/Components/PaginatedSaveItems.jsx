import  { useState } from "react";
// import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import SavedNewsCard from "./SavedNewsCard";
import { useSelector } from "react-redux";
import ReadMoreModal from "./ReadMoreModal";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// Example items, to simulate fetching from another resources.

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21];

function Items({currentItems}) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };
  
  return (
    <>
          <div  className="newsCards">
      {currentItems &&
        currentItems.map((item,i) => (
            <SavedNewsCard
             key={"titile" + i}
             article={item}
             onReadMore={handleReadMore}
            />
        ))}
          {selectedArticle && (
        <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
         )}
          </div>    
    </>
  );
}

function PaginatedItems({itemsPerPage}) {
  
 const items = useSelector((state) => state.savednews.saved);

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
      <Items currentItems={currentItems} />
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
    </>
  );
}

export default PaginatedItems;