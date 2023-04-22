// import React from 'react'

const ReadMoreModal = ({onClose,article}) => {
  return (
    <div className="readMoreModal">
        ReadMoreModal
        <button onClick={onClose}>Close</button>     
        <p>{article.title}</p>   
        </div>
  );
};
export default ReadMoreModal;