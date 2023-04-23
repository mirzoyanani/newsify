// import React from "react";
import { useState } from "react";
import api_key from "../api_key";
import "../Css/header.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearched } from "../Redux/Slices/serachedNewsSlice";
const Header = () => {
  const [searchItem, setSearchItem] = useState(null);
  const dispach = useDispatch();
  function handleChange(e) {
    setSearchItem(e.target.value);
  }
  async  function handleClick() {
    // console.log(searchItem);
    if(searchItem!=null){
      await fetch(`https://newsapi.org/v2/everything?q=${searchItem}&apiKey=${api_key}`).then((rsp)=>rsp.json()).then((rsp)=>dispach(setSearched(rsp.articles)));
    }
  }
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
        {/* <form   onSubmit={(e)=>handleSubmit(e)}> */}
        <div className="search-box">
          <input
            type="search"
            className="input-search"
            placeholder="Type to Search..."
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <NavLink
            onClick={handleClick}
            className="shortcuts-list-item navlink"
            to="/search"
          >
            Search
          </NavLink>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Header;
