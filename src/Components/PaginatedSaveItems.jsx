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
  function handleShareModal(){
    setOpenShareModal(!openshareModal);
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
             onShare={handleShareModal}
            />
        ))}
          {selectedArticle && (
        <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
         )}
         {
          openshareModal && <ShareModal onClose={handleShareModal} />
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
     {
        items==false ? (<div>
         <img className="loadingimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSROpCcjxp8hU2xCYxKwoKW1eyDkJS20-moxA&usqp=CAU" alt="" />
        </div>):<div>
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
      </div>}
    </>
  );
}

export default PaginatedItems;