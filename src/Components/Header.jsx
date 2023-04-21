// import React from "react";
import "../Css/header.css";
const Header = () => {
  return (
    <div className="header">
      <p className="title">Newsify</p>
      <div className="navbar">
        <ul className="shortcuts-list">
          <li className="shortcuts-list-item">Politics</li>
          <li className="shortcuts-list-item">U.S. News</li>
          <li className="shortcuts-list-item">Business</li>
          <li className="shortcuts-list-item">World</li>
          <li className="shortcuts-list-item">Tech</li>
          <li className="shortcuts-list-item">Health</li>
        </ul>
      </div>
      <div>
      <form id="content">
      <div className="search-box">
    <button className="btn-search"><i className="fas fa-search"></i></button>
    <input type="search" className="input-search" placeholder="Type to Search..."/>
  </div>
</form>
      </div>
    </div>
  );
};

export default Header;
