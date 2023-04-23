// import React from 'react'
import { useSelector } from "react-redux";
import NewsCard from "../Components/NewsCard";
import ReadMoreModal from "../Components/ReadMoreModal";
import { useState } from "react";
const SearchPage = () => {
    const news= useSelector((state) => state.searchednews.searchNews);
    console.log(news===undefined);
    console.log(news.length);
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
      {    (news!=undefined     )  &&   
       
        news.map((item,i)=>{
            return(
                    <NewsCard key={"card"+i} article={item}   onReadMore={handleReadMore}/>
            ) ;
        })
       }
       {
         (news===undefined) &&
         (  
            <div>
                <img className="loadingimg" src="data:image/png;base64,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" alt="" />
            </div>
         )
       }
    </div>
  );
};

export default SearchPage;