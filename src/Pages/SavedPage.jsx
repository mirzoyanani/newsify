// import React from "react";
import { useSelector } from "react-redux";
import SavedNewsCard from "../Components/SavedNewsCard";
const SavedPage = () => {
    const saved = useSelector((state) => state.savednews.saved);
  console.log(saved); 
  return <div>
    {
      saved.map((item,i)=>{
        return(
     <SavedNewsCard key={i} article={item} />
        );
      })
    }

  </div>;
};

export default SavedPage;
