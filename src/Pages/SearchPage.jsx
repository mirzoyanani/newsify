// import React from 'react'
import { useSelector } from "react-redux";
import NewsCard from "../Components/NewsCard";
import ReadMoreModal from "../Components/ReadMoreModal";
import { useState } from "react";
const SearchPage = () => {
    const news= useSelector((state) => state.searchednews.searchNews);
    // console.log(news===undefined);
    // console.log(news.length);
    // if(news!=undefined){
    //     console.log(news.length);
    // }

    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleReadMore = (article) => {
      setSelectedArticle(article);
    };
  
    const handleCloseModal = () => {
      setSelectedArticle(null);
    };
  
  return (
    <div className="newsCards">
         {selectedArticle && (
           <ReadMoreModal article={selectedArticle} onClose={handleCloseModal} />
      )}
      {    (news!=undefined )  &&   
       
        news.map((item,i)=>{
            return(
                    <NewsCard key={"card"+i} article={item}  onReadMore={handleReadMore}/>
            ) ;
        })
       }
       {
         (news==undefined) &&
         
            <div>
                <img className="loadingimg"  src="https://www.downgraf.com/wp-content/uploads/2019/05/Loader-animation-principle-freebie.gif?x36019" alt="" />
            </div>
         
       }
    </div>
  );
};

export default SearchPage;