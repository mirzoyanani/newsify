import { useState } from "react";
import api_key from "../Data/api_key";
import "../Css/header.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearched } from "../Redux/Slices/serachedNewsSlice";
import MenuItems from "./MenuItems";
const Header = () => {
  // const { setCategory } = useContext(CategoryContext);
  const [searchItem, setSearchItem] = useState(null);
  const dispach = useDispatch();
  function handleChange(e) {
    setSearchItem(e.target.value);
  }
  function handleInfo(info) {
    dispach(setSearched(info));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (searchItem != null) {
      await fetch(
        `https://newsapi.org/v2/everything?q=${searchItem}&apiKey=${api_key}`
      )
        .then((rsp) => rsp.json())
        .then((rsp) => handleInfo(rsp.articles));
      window.location.replace("http://localhost:5173/search");
    }
  }
  return (
    <div className="header">
      <NavLink className="shortcuts-list-item" to="/">
        <p className="title"> Newsify</p>
      </NavLink>
      <div className="navbar">
      
          {/* <li>
            <div className="dropdown">
              <button className="dropbtn">Dropdown</button>
              <div className="dropdown-content">
              <li
            onClick={() => setCategory("general")}
            className="shortcuts-list-item"
          >
            General
          </li>
          <li
            onClick={() => setCategory("business")}
            className="shortcuts-list-item"
          >
            Business
          </li>
          <li
            onClick={() => setCategory("sports")}
            className="shortcuts-list-item"
          >
            Sports
          </li>
          <li
            onClick={() => setCategory("health")}
            className="shortcuts-list-item"
          >
            Health
          </li>
          <li
            onClick={() => setCategory("entertainment")}
            className="shortcuts-list-item"
          >
            Entertaiment
          </li>
          <li
            onClick={() => setCategory("technology")}
            className="shortcuts-list-item"
          >
            Tecnology
          </li>
          <li
            onClick={() => setCategory("science")}
            className="shortcuts-list-item"
          >
            Science
          </li>
              </div>
            </div>
          </li>
          <li
            onClick={() => setCategory("general")}
            className="shortcuts-list-item"
          >
            General
          </li>
          <li
            onClick={() => setCategory("business")}
            className="shortcuts-list-item"
          >
            Business
          </li>
          <li
            onClick={() => setCategory("sports")}
            className="shortcuts-list-item"
          >
            Sports
          </li>
          <li
            onClick={() => setCategory("health")}
            className="shortcuts-list-item"
          >
            Health
          </li>
          <li
            onClick={() => setCategory("entertainment")}
            className="shortcuts-list-item"
          >
            Entertaiment
          </li>
          <li
            onClick={() => setCategory("technology")}
            className="shortcuts-list-item"
          >
            Tecnology
          </li>
          <li
            onClick={() => setCategory("science")}
            className="shortcuts-list-item"
          >
            Science
          </li>
          <li className="shortcuts-list-item">
            <NavLink className="shortcuts-list-item navlink" to="/saved">
              Saved
            </NavLink>
          </li>
        */}
        <MenuItems/>
       
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="search-box">
            <input
              type="search"
              className="input-search"
              placeholder="Type to Search..."
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
