// import React from "react";
import PaginatedItems from "../Components/PaginatedSaveItems";
import ShareModal from "../Components/ShareModal";
const SavedPage = () => {
  return (
    <div>
      <PaginatedItems itemsPerPage={12}/> 
      <ShareModal/>   
  </div>
  );
};

export default SavedPage;
