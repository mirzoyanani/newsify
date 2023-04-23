// import React from "react";
import "../Css/header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <NavLink className="shortcuts-list-item" to="/">
        <p className="title"> Newsify</p>
      </NavLink>
      <div className="navbar">
        <ul className="shortcuts-list">
          <li className="shortcuts-list-item">Politics</li>
          <li className="shortcuts-list-item">Business</li>
          <li className="shortcuts-list-item">World</li>
          <li className="shortcuts-list-item">Tech</li>
          <li className="shortcuts-list-item">Health</li>
          <li className="shortcuts-list-item">
            <NavLink className="shortcuts-list-item navlink" to="/saved">
              Saved
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <form id="content">
          <div className="search-box">  
            <input
              type="search"
              className="input-search"
              placeholder="Type to Search..."
            />
             <NavLink className="shortcuts-list-item navlink" to="/search">
              Search
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
