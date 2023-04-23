// import React from "react";
import { useSelector } from "react-redux";
import SavedNewsCard from "../Components/SavedNewsCard";
import ReadMoreModal from "../Components/ReadMoreModal";
import { useState } from "react";
const SavedPage = () => {
  const saved = useSelector((state) => state.savednews.saved);
  // console.log(saved);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleReadMore = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
  };

  return <div className="newsCards">
                  {selectedArticle && (
                    <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
                  )} 
    
    {
      saved.map((item,i)=>{
        return(
     <SavedNewsCard  onReadMore={handleReadMore} key={"titile"+i} article={item} />
        );
      })
    }
  </div>;
};

export default SavedPage;
