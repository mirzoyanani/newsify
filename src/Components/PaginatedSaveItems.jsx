import  { useState } from "react";
import ReactPaginate from "react-paginate";
import SavedNewsCard from "./SavedNewsCard";
import { useSelector } from "react-redux";
import ReadMoreModal from "./ReadMoreModal"; 
import ShareModal from "./ShareModal";
function Items({currentItems}) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const[openshareModal,setOpenShareModal] = useState(false);
  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };
  const handleCloseModal = () => {
    setSelectedArticle(null);
  };
  function handleCloseShareModal(){
    setOpenShareModal(false);
  }
  function handleOPenShareModal(){
    setOpenShareModal(true);
  }
  return (
    <>
       <div  className="newsCards">
      {currentItems &&
        currentItems.map((item,i) => (
            <SavedNewsCard
             key={"titile" + i}
             article={item}
             onReadMore={handleReadMore}
             onShare={handleOPenShareModal}
            />
        ))}
          {selectedArticle && (
        <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
         )}
         {
          openshareModal && <ShareModal onClose={handleCloseShareModal} />
         }
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