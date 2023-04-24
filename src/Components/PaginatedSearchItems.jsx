import  { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import ReadMoreModal from "./ReadMoreModal";
import NewsCard from "../Components/NewsCard";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// Example items, to simulate fetching from another resources.

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
            <NewsCard
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